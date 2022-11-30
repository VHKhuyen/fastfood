const express = require("express");
const route = require("./routes");
const cors = require("cors");
const bodyParser = require("body-parser");
const { notFound, errorHandler } = require("./middleware/error-handler");

const app = express();
const PORT = process.env.PORT || 5000;
const db = require("./db/index");
db.connect();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

route(app);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Hello! i am run server on port ${PORT}`));
