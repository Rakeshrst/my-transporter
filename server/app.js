const express = require("express");
const authRoutes = require("./routings/auth")
const app = express();
const database = require('./database.js');

async function setupDbConnection() {
    console.log('Setting DB Connection');
   
    try {
        console.log('Initializing database module');
     
        await database.initialize(); 
      } catch (err) {
        console.error(err);
     
        process.exit(1); // Non-zero failure code
      }
  }
   
  setupDbConnection();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authentication"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});

app.use("/api/auth", authRoutes);

module.exports = app;