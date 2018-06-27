/* import Database from "./database/Database" */
import app from "./app"

/* const config = {
  host: "localhost:3306",
  user: "root",
  password: "foobar",
  database: "test"
}

const database = new Database(config) */

module.exports = app.listen(app.get("port"), () => {
  console.log("🚀  " + "Server listening on port " + app.get("port") + " 📬")
})
