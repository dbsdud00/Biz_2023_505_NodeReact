import http from "http";
// const http = require("http"); // commonjs 용
http
  .createServer((req, res) => {
    console.log("Hello My Server");
    res.end("<h1>Hello</h1>");
  })
  .listen(8080);
