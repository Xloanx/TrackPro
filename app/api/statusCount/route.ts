import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../prisma/client";

export default async function handler(request: NextRequest, response: NextResponse) {
  try {
    // Run the Prisma query
    console.log("API route called"); // Add this line
    const statusCount = await prisma.issue.groupBy({
      by: ['status'],
      _count: {
        status: true,
      },
    });

    // Send the results back as JSON
    //res.status(200).json(statusCounts);
    return NextResponse.json(statusCount, { status:201 })
  } catch (error) {
    console.error('Error fetching status counts:', error);
    //res.status(500).json({ error: 'An error occurred while fetching status counts' });
    return NextResponse.json({ message: "Server Error"}, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
