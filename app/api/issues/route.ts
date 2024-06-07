import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";
import { createIssueSchema, fetchIssueSchema } from "../../validationSchemas";

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


//create GET request function to fecth all data
export async function GET(request: NextRequest, response: NextResponse){

    try {
        const data = await prisma.issue.findMany({where: { id: parseInt(id, 10) },});
        //if no data in db
        // if (!data || data.length === 0){
        //     return NextResponse.json({message: "No data in database"}, {status: 404})
        // }
        //if data exist
        return NextResponse.json(data, { status:201 })
    } catch (error) {
        return NextResponse.json({ message: "Server error", error }, { status: 500 });
    }
}

// export async function GET(request, { params }) {
//     const { id } = params;
  
//     try {
//       const issue = await prisma.issue.findUnique({
//         where: { id: parseInt(id, 10) },
//       });
  
//       if (!issue) {
//         return NextResponse.json({ message: "Incorrect Issue ID" }, { status: 404 });
//       }
  
//       return NextResponse.json(issue, { status: 201 });
//     } catch (error) {
//       console.error(error);
//       return NextResponse.json({ message: "Server error" }, { status: 500 });
//     }
//   }


//create GET request function to fetch a single data
// export async function GETONE(request: NextRequest, response: NextResponse){

//     const body = await request.json();
//     const validation = fetchIssueSchema.safeParse(body);

//     //check for validation success
//     if(!validation.success)
//         return NextResponse.json(validation.error.errors, {status: 400});

//     const issue = await prisma.issue.findUnique({
//         where: {
//             id: body.id,
//         },
//       })

//     //if issue does not exist on db
//     if (!issue)
//         return NextResponse.json({message: "Incorrect Issue ID"}, {status: 404})
//     //if data exist
//     return NextResponse.json(issue, { status:201 })
//     }


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