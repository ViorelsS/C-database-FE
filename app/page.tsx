"use client";

import { executeQuery } from "@/actions/execute-query";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

interface ResponseData {
  rows: String[];
}

export default function Home() {
  const [state, setState] = useState<String[]>([]);

  async function fetchData() {
    const result = (await executeQuery("SELECT * FROM users;")) as ResponseData;
    result.rows
      .filter((item) => item != "Risultati:")
      .map((item) => setState((prev) => [...prev, item]));
  }

  async function fetchTables() {
    const response = (await executeQuery("LIST TABLES;")) as any;
    console.log("LIST TABLES: ", response);
  }

  useEffect(() => {
    fetchData();
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
      <Button onClick={() => fetchTables()}>Carica tabelle</Button>
    </div>
  );
}
