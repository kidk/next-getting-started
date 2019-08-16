const express = require("express");
const next = require("next");
const getConfig = require("next/config");
const nextI18nMiddleware = require("next-i18next/middleware").default;
const expressI18NextMiddleware = require("i18next-express-middleware");
const nextI18n = require('./config/nextI18n');

const app = next({ dev: process.env.NODE_ENV !== "production" });
const server = express();
const handler = app.getRequestHandler();

app.prepare().then(() => {
    server.use(handler);

    server.use(nextI18nMiddleware(nextI18n));
    server.use(expressI18NextMiddleware.handle(nextI18n.i18n));

    server.listen(3001, err => {
        console.log('listening on 3001');
    });
});
