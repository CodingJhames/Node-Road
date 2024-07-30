const http = require("http");

http
  .createServer((req, resp) => {
    resp.write("Hello parchita");
    resp.end();
  })
  .listen(8080);

console.log("Escuchando el puerto", 8080);
