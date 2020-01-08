require('newrelic');
const express = require("express");
const next = require("next");
const getConfig = require("next/config");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const server = express();
const handler = app.getRequestHandler();

app.prepare().then(() => {
    server.use(handler);

    server.get('*', (req, res) => {
        const parsedUrl = parse(req.url, true)
        const { pathname, query } = parsedUrl
        // Transaction Name: (w/o this new relic shows "/*" for all transaction)
        // https://docs.newrelic.com/docs/agents/nodejs-agent/api-guides/guide-using-nodejs-agent-api
        newrelic.setTransactionName(pathname);

        return handle(req, res)
    });

    server.listen(3001, err => {
        console.log('listening on 3001');
    });
});
