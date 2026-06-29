import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { propertyId?: string; studentId?: string };

  if (!body.propertyId || !body.studentId) {
    return NextResponse.json({ error: "propertyId and studentId are required." }, { status: 400 });
  }

  const holdExpiresAt = new Date(Date.now() + 1000 * 60 * 30).toISOString();

  return NextResponse.json({
    message: "Room hold created",
    hold: {
      holdId: `HOLD-${Math.floor(Math.random() * 100000)}`,
      propertyId: body.propertyId,
      studentId: body.studentId,
      holdExpiresAt
    }
  });
}
