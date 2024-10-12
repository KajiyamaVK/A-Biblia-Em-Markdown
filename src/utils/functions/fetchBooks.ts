import { Book } from "../../types/BibleTypes";

export async function fetchBooks(): Promise<Book[]> {
  return await fetch("https://www.abibliadigital.com.br/api/books", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.TOKEN}`,
    },
  })
    .then((res) => res.json())
    .then((data: Book[]) => {
      return data;
    });
}
