const net = require("net");

export default async function sendQuery(query: string) {
  return new Promise((resolve, reject) => {
    const client = new net.Socket();

    client.connect(8080, "127.0.0.1", () => {
      console.log("🟩 Connesso al v-database");
      client.write(query + "\n");
    });

    client.on("data", (data: any) => {
      const result = data.toString();
      console.log("Risultati ricevuti dal database: ", result);

      /* Convertiamo la stringa in array di stringhe */
      const rows = result.split("\n").filter((row: any) => row.trim() !== "");

      resolve({ ...rows });
      client.destroy();
    });

    client.on("error", (err: any) => {
      reject(`Errore di connessione: ${err.message}`);
    });
  });
}
