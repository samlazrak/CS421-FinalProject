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
  public mongoUrl: string = "mongodb://johnny:sasp8675@ds111562.mlab.com:11562/gql-devresources"

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

    // this.app.post('/register', (req, res)=> {
    //   const User = new User ({
    //     firstName: req.body.firstName
    //   })
    // })

    this.app.use("/graphiql", graphiqlExpress({ endpointURL: "graphql" }))
  }

  private mongoSetup() {
    mongoose.Promise = global.Promise
    mongoose.connect(this.mongoUrl)
    const connection = mongoose.connection
    connection.once('open', () => {
      // console.log(`Connected to ${URL}`)
      console.log(`Connected to gql-devresources`)
    })
  }
  
}

export default new App().app
