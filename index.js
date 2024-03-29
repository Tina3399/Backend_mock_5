const jsonServer = require("json-server"); // importing json-server library
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middleware = jsonServer.defaults();
const port = 4500; //  chose port from here like 8080, 3001

server.use(middleware);
server.use(router);

server.listen(port);
