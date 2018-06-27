import app from "./app"

module.exports = app.listen(app.get("port"), () => {
  // tslint:disable-next-line:no-console
  console.log("🚀  " + "Server listening on port " + app.get("port") + " 📬")
})
