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
