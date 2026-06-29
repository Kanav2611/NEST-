import { NextRequest, NextResponse } from "next/server";
import { properties } from "@/lib/mock-data";
import { filterPropertiesBySmartQuery, parseNaturalSearch } from "@/lib/ai/search-parser";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { query?: string };

  if (!body.query || body.query.trim().length < 3) {
    return NextResponse.json({ error: "Query must be at least 3 characters." }, { status: 400 });
  }

  const parsed = parseNaturalSearch(body.query);
  const results = filterPropertiesBySmartQuery(properties, parsed);

  return NextResponse.json({
    parsed,
    total: results.length,
    results
  });
}
