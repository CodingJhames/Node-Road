import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
  base: number;
  limite: number;
  showTable: boolean;
  fileDestination: string;
  fileName: string;
}

export class ServerApp {
  static run({
    base,
    limite,
    showTable,
    fileDestination,
    fileName,
  }: RunOptions) {
    console.log("server running...");

    const table = new CreateTable().execute({ base, limite });

    const wasCreated = new SaveFile().execute({
      fileContent: table,
      fileDestination: fileDestination,
      fileName: fileName,
    });

    if (showTable) console.log(table);

    wasCreated
      ? console.log("File created!")
      : console.error("File not created!");
  }
}
