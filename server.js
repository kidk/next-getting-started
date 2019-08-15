const express = require("express");
const next = require("next");
const getConfig = require("next/config");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const server = express();
const handler = app.getRequestHandler();

app.prepare().then(() => {
    server.use(handler);

    server.listen(3001, err => {
        console.log('listening on 3001');
    });
});
