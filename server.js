const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

require('dotenv').config()

const Port = process.env.PORT

server.use(middlewares);
server.use(router);
server.listen(Port, () => {
  console.log(`JSON Server is running on port ${Port}`);
});