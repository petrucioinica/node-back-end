const express = require("express");

const port = 3000;

const app = express();

app.listen(port, () => {
	console.log("App started, hello world!");
});

app.get("/", (req, res) => {
	res.send("Hello!");
});
