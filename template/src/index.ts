import * as express from "express";
import * as bodyParser from "body-parser";
import helmet from "helmet";
import * as cors from "cors";
import routes from "./routes";
import { AppDataSource } from './data-source';

AppDataSource.initialize().then(async () => {
  const app = express();

  // Call midlewares
  app.use(cors());
  app.use(helmet())
  app.use(bodyParser.json());

  //Set all routes from routes folder
  app.use("/", routes);

  app.listen(3000, () => {
    console.log("Server started on port 3000!");
  });
})
  .catch(error => console.log(error));
