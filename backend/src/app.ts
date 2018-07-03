import * as bodyParser from "body-parser"
import * as cors from "cors"
import * as dotenv from "dotenv"
import * as express from "express"
import * as mongoose from "mongoose"

import { graphiqlExpress, graphqlExpress } from "apollo-server-express"

import { Routes } from "./routes/index"
import schema from "./schema/index"

class App {
  public app: express.Application
  public routes: Routes = new Routes()
  public mongoUrl: string = "mongodb://localhost/devresources"

  constructor() {
    this.app = express()
    this.config()
    this.routes.routes(this.app)
    this.mongoSetup()
  }

  private config(): void {
    dotenv.config({ path: "../.env" })

    this.app.set("port", process.env.PORT || 3000)

    /* this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false })) */

    this.app.use(
      "/graphql",
      cors(),
      bodyParser.json(),
      graphqlExpress(req => {
        return {
          schema
        }
      })
    )
    this.app.use("/graphiql", graphiqlExpress({ endpointURL: "graphql" }))
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise
    mongoose.connect(this.mongoUrl)
    const connection = mongoose.connection;
    connection.once('open', () => {
      console.log(`Connected to ${URL}`);
    });
  }
}

export default new App().app
