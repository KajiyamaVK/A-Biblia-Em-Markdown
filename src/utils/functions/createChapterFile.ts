import { Book, BooksNames } from "../../types/BibleTypes"
import fs from "fs"
import path from "path"


interface Chapter {
  number: number
  verses?: number
}

interface Verses {
  number: number
  text: string
}


interface Content {
  book: Book,
  chapter: Chapter,
  verses: Verses[]

}


export async function createChapterFile(bookDirName: string, chapter: number, content: Content) {

  let formattedChapter:string = ''
  let verses = content.verses

  for(let verse of verses) {
      formattedChapter += `*[${verse.number}]* ${verse.text}\n\n`
  }

  const filePath = path.join(__dirname, `../../../data/${bookDirName}/${chapter}.md`)

  console.info(`Creating chapter file: ${bookDirName} ${chapter}`)
  fs.writeFile(filePath, formattedChapter, (err: any) => {
    if (err) {
      throw err
    } else {
      console.info(`Chapter ${chapter} of ${bookDirName} has been created`)
    }
  })
}