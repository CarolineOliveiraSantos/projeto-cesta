const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");
const server = express();

server.use(express.json());
server.use(cors());

mongoose.connect("mongodb://localhost:27017/projeto-cesta", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

server.use(routes);
server.listen(3333);