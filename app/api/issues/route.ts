import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";
import { createIssueSchema } from "../../validationSchemas";

//create POST request function
export async function POST(request: NextRequest){
    const body = await request.json();
    const validation = createIssueSchema.safeParse(body);

    //check for validation success
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status: 400});

    const newIssue = await prisma.issue.create({
        data: {title: body.title, description: body.description}
    });

   return NextResponse.json(newIssue, { status:201 })
}


//create GET request function
export async function GET(request: NextRequest, response: NextResponse){

    const data = await prisma.issue.findMany()

    //if no data in db
    if (!data)
        return NextResponse.json({message: "No data in database"}, {status: 404})
    //if data exist
    return NextResponse.json(data, { status:201 })
    }


// //create DELETE request function
// export async function DELETE(request: NextRequest, response: NextResponse){
//     const data = await prisma.issue.delete({
//         // where: {
//         //     id: Number(request.)}
//         console.log(request)
//     })

//     //if no data in db
//     if (!data)
//         return NextResponse.json({message: "Invalid Data"}, {status: 404})


//     //if data exist
//     return NextResponse.json(data, { status:201 })
//     }