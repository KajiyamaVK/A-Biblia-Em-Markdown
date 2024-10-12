import { BooksNames } from "../../types/BibleTypes";

export function getAllVerses(book: BooksNames, chapter: number) {
  return fetch(`https://www.abibliadigital.com.br/api/verses/nvi/${book}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
} 