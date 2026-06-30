const serverless = require("serverless-http");
const app = require("./product-app");

module.exports.handler = serverless(app);