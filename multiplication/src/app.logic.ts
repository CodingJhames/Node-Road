//previo refactorizarse

/* import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const { b: base, l: limite, s: showTable } = yarg;

let outputMessage = "";
const headerMessage = `
-------------------------------
       tabla del ${base}             
-------------------------------\n`;

for (let i = 1; i <= limite; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (showTable) {
  console.log(outputMessage);
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log("File created!");
 */

//refactorizado

import fs from "fs";
import { yarg } from "./config/plugins/yargs.plugin";

const { b: base, l: limite, s: showTable } = yarg;

let outputMessage = "";
const headerMessage = `
-------------------------------
       tabla del ${base}             
-------------------------------\n`;

for (let i = 1; i <= limite; i++) {
  outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (showTable) {
  console.log(outputMessage);
}

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log("File created!");
