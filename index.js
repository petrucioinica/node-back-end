const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const dotenv = require("dotenv");
dotenv.config();

const port = process.env.PORT;

//sequelize
const db = require("./models/index.js");
// db.sequelize.sync({ force: true });

const authorizationMiddleware = require("./middlewares/authorization");

const schema = require("./graphql");

const app = express();

app.use(
	"/graphql",
	// authorizationMiddleware,
	graphqlHTTP({
		schema,
	})
);

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
