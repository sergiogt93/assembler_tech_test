const { connect, disconnect } = require("mongoose");
const CONFIG = require("../config/config");

const connectDatabase = async () => await connect(CONFIG.mongoDB.db_url);

module.exports = {
  connectDatabase,
  disconnect,
};
