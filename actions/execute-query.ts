"use server";

import sendQuery from "@/utils/v-dbClient";

export async function executeQuery(query: string) {
  try {
    const result = await sendQuery(query);
    console.log("📩 Risultati ricevuti:", result);
    return result;
  } catch (error) {
    console.error("❌ Errore query:", error);
    return "Errore nella query";
  }
}

// export async function executeQuery(query: string) {
//   if (!query) {
//     throw new Error("Query non fornita");
//   }

//   try {
//     const result = (await sendQuery(query)) as { row: any };
//     console.log("RESULT", result);
//     return { data: result };
//   } catch (error: any) {
//     throw new Error(error.toString());
//   }
// }

// export async function POST(req: NextRequest) {
//   const { query } = await req.json();
//   try {
//     const result = await executeQuery(query);
//     return NextResponse.json(result, { status: 200 });
//   } catch (error: any) {
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
