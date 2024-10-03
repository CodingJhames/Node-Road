import { yarg } from "./config/plugins/yargs.plugin";
import { ServerApp } from "./presentation/server-app";

// console.log(process.argv);
// console.log(yarg);

(async () => {
  //   console.log("ejecutado");
  await main();
})();

async function main() {
  const {
    b: base,
    l: limite,
    s: showTable,
    n: fileName,
    d: fileDestination,
  } = yarg;

  //console.log(yarg);
  ServerApp.run({ base, limite, showTable, fileName, fileDestination });
}
