import { checkIfFileExists } from "./utils/functions/checkIfFileExists";
import { createChapterFile } from "./utils/functions/createChapterFile";
import { fetchBooks } from "./utils/functions/fetchBooks";
import fs from "fs";
import { fetchChapters } from "./utils/functions/fetchChapters";
import { removeFolder } from "./utils/functions/removeFolder";
async function main() {
  const books = await fetchBooks()
    .then((books) => books)
    .catch((err) => {
      console.error(err);
    });

  if (!books) {
    console.error("Fetch Books failed");
    return;
  }

  let counter = 1;

  for (const book of books) {
    const bookPath = `./data/${counter}_${book.name}`;
    
    console.info(`Creating directory for ${book.name}`);
    await removeFolder(bookPath).then(() => {
      fs.mkdirSync(bookPath);
      console.info(`${book.name} directory has been created`);
    });
    
    for (let i = 1; i <= book.chapters; i++) {
      
      const content = await fetchChapters(book.abbrev.pt, i);
      
      createChapterFile(`${counter}_${book.name}`, i, content);
    } 
    counter++;
  }}
main();

