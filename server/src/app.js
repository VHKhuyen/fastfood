const express = require("express");
const route = require("./routes");
const cors = require("cors");

const app = express();
const PORT = 5000;
const db = require("./config/db/index");

app.use(cors());
app.use(express.json());

db.connect();

route(app);

app.listen(PORT, () => console.log(`Hello! i am run server on port ${PORT}`));
