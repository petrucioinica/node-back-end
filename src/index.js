const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;
console.log("port is ", port);

//sequelize
const db = require("../models/index.js");
// db.sequelize.sync({ alter: true });

const app = express();

app.listen(port, () => {
	console.log("App started, hello world!");
});

app.get("/", (req, res) => {
	res.send("Hello!");
});
