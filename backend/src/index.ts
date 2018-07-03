import app from "./app"

module.exports = app.listen(app.get("port"), () => {
  console.log("🚀  " + "Server listening on port " + app.get("port") + " 📬")
})
