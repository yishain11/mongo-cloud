const express = require("express");
const server = express();
const path = require("path");

const studentsRouter = require("../routes/students.router");
const homeRouter = require("../routes/home.router");
const apiRouter = require("../routes/api.router");

const path404 = path.join(__dirname, "../views/404/404.html");

server.use(express.json());
server.use((req, res, next) => {
  const { method, url } = req;
  console.log(`got req to url: ${url}, method: ${method}`);
  next();
});

server.use("/students", studentsRouter);
server.use("/api", apiRouter);
server.use("/", homeRouter);
server.use("*", (req, res) => {
  res.sendFile(path404);
});

server.listen(3434, () => {
  console.log("server listening on 3434");
});
