import { NextRequest, NextResponse } from "next/server";
import sendQuery from "@/utils/v-dbClient";

export async function POST(req: NextRequest) {
  const { query } = await req.json();
  if (!query) {
    return NextResponse.json({ error: "Query non fornita" }, { status: 400 });
  }

  try {
    const result = (await sendQuery(query)) as { row: any };
    console.log("RESULT", result);
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.toString() }, { status: 500 });
  }
}
