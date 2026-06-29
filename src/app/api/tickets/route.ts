import { NextRequest, NextResponse } from "next/server";
import { tickets } from "@/lib/mock-data";

export async function GET() {
  const now = Date.now();
  const withEscalationHints = tickets.map((ticket) => {
    const slaTime = new Date(ticket.slaDueAt).getTime();
    const shouldEscalate = now > slaTime && ticket.status !== "Completed";
    return {
      ...ticket,
      shouldEscalate,
      escalationTarget: shouldEscalate ? "Property Manager" : null
    };
  });

  return NextResponse.json({ items: withEscalationHints });
}

export async function POST(request: NextRequest) {
  const body = (await request.json()) as {
    title?: string;
    category?: string;
    priority?: string;
    studentName?: string;
    roomNumber?: string;
  };

  if (!body.title || !body.category || !body.studentName || !body.roomNumber) {
    return NextResponse.json(
      { error: "title, category, studentName, and roomNumber are required." },
      { status: 400 }
    );
  }

  const created = {
    id: `TCK-${Math.floor(Math.random() * 9000 + 1000)}`,
    title: body.title,
    category: body.category,
    priority: body.priority ?? "Medium",
    studentName: body.studentName,
    roomNumber: body.roomNumber,
    assignedWorker: "Pending Assignment",
    status: "Created",
    slaDueAt: new Date(Date.now() + 1000 * 60 * 60 * 24).toISOString()
  };

  return NextResponse.json({ item: created }, { status: 201 });
}
