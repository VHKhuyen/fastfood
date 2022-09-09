const express = require("express");
const route = require("./routes");
const app = express();
const PORT = 5000;

app.use(express.json())
const db = require("./config/db/index");
db.connect();
route(app)

app.listen(PORT, () => console.log(`sever started on port ${PORT}`));
