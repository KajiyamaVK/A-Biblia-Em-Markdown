import {  ptAbbrev } from "../../types/BibleTypes";

export async function fetchChapters(book: ptAbbrev, chapter:number): Promise<any> {
  return fetch(`https://www.abibliadigital.com.br/api/verses/nvi/${book}/${chapter}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${process.env.TOKEN}`,
      },
    }
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
}