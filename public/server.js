const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // مسیر فایل JSON شما
const middlewares = jsonServer.defaults();

server.use(cors()); // فعال کردن CORS
server.use(middlewares);
server.use(router);

server.listen(8080, () => {
  console.log('JSON Server is running');
});