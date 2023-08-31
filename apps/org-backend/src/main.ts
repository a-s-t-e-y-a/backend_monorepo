/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express ,{Express} from 'express';
import * as path from 'path';
import bodyParser from 'body-parser';
import singUp from './routes_controller/signup/routes/route';

const docs = require("../docs");
const app :Express = express();
app.use(bodyParser.json());
const swaggerUI = require("swagger-ui-express");

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.use('/api/v1/signup',singUp)
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));
const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api/v1/`);
});
server.on('error', console.error);
