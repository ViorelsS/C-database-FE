"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState<String[]>();

  async function runQuery() {
    const response = await fetch("/api/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: "SELECT * FROM users" }),
    });

    const data = await response.json();
    console.log("Risultato query:", data.data.rows);

    setState(() => data.data.rows);
  }

  useEffect(() => {
    runQuery();
    console.log(state);
  }, []);

  return (
    <div className="">
      {!state ? (
        <p>Loading...</p>
      ) : (
        state.map((item) => {
          return <p key={item.toString()}>{item}</p>;
        })
      )}
    </div>
  );
}
