import { graphiqlExpress, graphqlExpress } from "apollo-server-express"
import * as bodyParser from "body-parser"
import * as dotenv from "dotenv"
import * as express from "express"

import { Routes } from "./routes/index"
import schema from "./schema/index"

class App {
  public app: express.Application
  public routes: Routes = new Routes()

  constructor() {
    this.app = express()
    this.config()
    this.routes.routes(this.app)
  }

  private config(): void {
    dotenv.config({ path: "../.env" })

    this.app.set("port", process.env.PORT || 3000)

    this.app.use(bodyParser.json())
    this.app.use(bodyParser.urlencoded({ extended: false }))

    this.app.use("/graphql", graphqlExpress({ schema, tracing: true }))
    this.app.use("/graphiql", graphiqlExpress({ endpointURL: "graphql" }))
  }
}

export default new App().app
