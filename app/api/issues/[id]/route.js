import { NextRequest, NextResponse } from 'next/server';
import prisma from "../../../../prisma/client";

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
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
