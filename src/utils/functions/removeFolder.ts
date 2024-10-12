import { checkIfFileExists } from "./checkIfFileExists";
import fs from "fs/promises";

export async function removeFolder(folderPath: string) {
  const exists = await checkIfFileExists(folderPath);

  if (exists) {
    console.log(`Removing folder ${folderPath}`);

    try {
      await fs.rm(folderPath, { recursive: true });
      console.info(`Folder ${folderPath} removed`);
    } catch (err) {
      console.error(`Error removing folder ${folderPath}`, err);
      throw err;
    }
  }
}
