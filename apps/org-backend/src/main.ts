/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import * as path from 'path';
const docs = require("../docs");
const app = express();
const swaggerUI = require("swagger-ui-express");

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to org_backend!' });
});
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));
const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
