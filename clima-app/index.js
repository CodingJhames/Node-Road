const { leerInput } = require("./helpers/inquirer");

const main = async () => {
  const texto = await leerInput("Hello");
  console.log(texto);
};

main();
