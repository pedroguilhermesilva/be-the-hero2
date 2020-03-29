const crypto = require("crypto");

//create id to each ong
module.exports = function generateUniqueId() {
  return crypto.randomBytes(4).toString("HEX");
};
