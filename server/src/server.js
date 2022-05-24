// import libraries
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const server = express();

// configure, middleware from server
server.use(cors());
server.use(express.json());
server.use(morgan("dev"));

module.exports = server;
