const http = require("http");

http
  .createServer((req, resp) => {
    //resp.writeHead(200, { "Content-Type": "application/json" });
    // resp.setHeader("Content-Disposition", "attachment; filename=lista.csv");
    // resp.writeHead(200, { "Content-Type": "application/csv" });

    resp.write("Hello Parchita");
    resp.end();

    // const persona = {
    //   id: 1,
    //   nombre: "Jhames",
    // };

    // resp.write(JSON.stringify(persona));
  })
  .listen(8080);

console.log("Escuchando el puerto", 8080);
