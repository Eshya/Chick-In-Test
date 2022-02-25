const mongoose = require("mongoose"); //import mongoose
const ReadEnv = require("../utils/readEnv").ReadEnv
const readEnv = new ReadEnv();
// test schema
const testScheme = new mongoose.Schema({
    message: String,
    created_at: Date,
});

module.exports = mongoose.model(readEnv.get("MONGO_DATABASE"), testScheme);