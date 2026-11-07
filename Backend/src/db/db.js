const mongoose = require("mongoose");

async function connectDB() {
const uri = "mongodb+srv://MERN-2026:2TlFumOrhR9FsvMk@cluster0.wt4hzqf.mongodb.net/MERN-2026";


await mongoose.connect(uri);

console.log("Database connected successfully");


}

module.exports = connectDB;
