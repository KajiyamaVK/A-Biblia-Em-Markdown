import { access, constants } from "fs";

export function checkIfFileExists(path: string): Promise<boolean> {
  return new Promise((resolve) => {
    access(path, constants.F_OK, (err) => {
      if (err) {
        resolve(false);
      } else {
        resolve(true);
      }
    });
  });
}
