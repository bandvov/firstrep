"use strict";
let Yeps = require("yeps");
let app = new Yeps();
let logger = require("yeps-logger");
let error = require("yeps-error");

let Router = require("yeps-router");
let router = new Router();

let server = require("yeps-server");

app.all([error(), logger()]);

router.get("/home").then(async ctx => {
  ctx.res.statusCode = 200;
  ctx.res.end("homepage");
});
app.then(router.resolve());
server.createHttpServer(app);
