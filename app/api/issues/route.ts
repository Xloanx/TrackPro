import { NextRequest, NextResponse } from "next/server";
import {z} from "zod";
import prisma from "../../../prisma/client";

//validate entry with zod
const createIssueSchema = z.object({
    title: z.string().min(1).max(255),
    description: z.string().min(1)
});

//create POST request function
export async function POST(request: NextRequest){
    //const { name, email, message } = request.body;
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