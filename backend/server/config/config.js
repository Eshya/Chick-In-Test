const ReadEnv = require("../utils/readEnv").ReadEnv
const readEnv = new ReadEnv();

module.exports = {
    url: readEnv.get("MONGODB_URL_LOCAL") || "mongodb://localhost:27017/db"
};