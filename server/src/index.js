const express = require("express");
const route = require("./routes");
const cors = require("cors");
const app = express();
const PORT = 5000;

const db = require("./config/db/index");
db.connect();

app.use(express.json());
app.use(cors());
route(app);

app.listen(PORT, () => console.log(`sever started on port ${PORT}`));
