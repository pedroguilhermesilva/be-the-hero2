const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(cors());

// express understand that body of request is type JSON
app.use(express.json());
app.use(routes);

app.listen(3333);
