/* Libraries */
const mysql = require("mysql2/promise")

/* Constructor */
module.exports = class Database {
  constructor(config) {
    /* Saving Config */
    this.config = config

    /* Logger Setup */
    this.log = new Logger("Database")

    /* Connecting */
    this.log.info("Connecting...")
    this.connect()
  }

  async connect() {
    try {
      /* Creating MySQL Object */
      this.mysql = await mysql.createConnection(this.config)
      this.connection = this.mysql.connection

      /* Logging Connection */
      this.log.info(`Connected as ID: ${this.connection.threadId}`)

      /* Error Handling */
      this.connection.on("error", this.handleError)
    } catch (error) {
      this.log.error(error)
    }
  }

  /* Data Methods */
  async execute(sql, data) {
    const result = await this.mysql.execute(sql, data)
    return result[0]
  }
  async query(sql) {
    const result = await this.mysql.query(sql)
    return result[0]
  }
  async queryData(sql, data) {
    const result = await this.mysql.query(sql, data)
    return result[0]
  }

  /* Action Methods */
  escape(string) {
    return this.mysql.escape(string)
  }

  /* Events */
  on(event, callback) {
    return this.connection.on(event, callback)
  }

  /* Errors */
  handleError(error) {
    /* Checking if it's a disconnect */
    if (error.code === "PROTOCOL_CONNECTION_LOST" || error.fatal == true) {
      this.log.error("Database Lost Conection, reconnecting...")

      /* Reconnecting */
      this.connect()
    } else if (error.syscall === "connect") {
      this.log.error(
        `Connection Error: ${error.code} ${error.address}:${error.port}`
      )
    } else {
      this.log.error(`General Error: ${error}`)
    }
  }
}
