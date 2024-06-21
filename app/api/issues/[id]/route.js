import { NextRequest, NextResponse } from 'next/server';
import prisma from "../../../../prisma/client";
import { updateIssueSchema } from '@/app/validationSchemas';

export async function GET(request, { params }) {
  const { id } = params;

  try {
    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!issue) {
      return NextResponse.json({ message: "Incorrect Issue ID" }, { status: 404 });
    }

    return NextResponse.json(issue, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error"}, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;

  try {
    const issue = await prisma.issue.findUnique({
      where: { id: parseInt(id, 10) },
    });

    if (!issue) {
      return NextResponse.json({ message: "Incorrect Issue ID" }, { status: 404 });
    }

    await prisma.issue.delete({
      where: {
        id: parseInt(issue.id),
      },
    });

    return NextResponse.json({});
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Server error"}, { status: 500 });
    }
}

//create PUT request function
export async function PUT(request, { params }){
  try{
      const { id } = params;
      const body = await request.json();
      
      //validate request with zod
      const validation = updateIssueSchema.safeParse(body);       

      //check for validation success
      if(!validation.success)
          return NextResponse.json(validation.error.errors, {status: 400});

      //check if the supplied id exists
      const issue = await prisma.issue.findUnique({
                          where: { id: parseInt(id, 10) },
                        });
      if(!issue) 
          return NextResponse.json({ message: "Invalid Issue"}, { status: 400 });

      //if all is well till this point, attempt update
      const updatedIssue = await prisma.issue.update({
        where: {
          id: id,
        },
        data: {title:       body.title, 
               description: body.description,
               status:      body.status,
               priority:    body.priority,
               assignee:    body.assignee,
               reporter:    body.reporter
        },
      });
      return NextResponse.json(updatedIssue, { status:201 })
  }catch (error) {
    return NextResponse.json({ message: "Server Error"}, { status: 500 });
  }
}