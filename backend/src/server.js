const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

mongoose.connect("mongodb+srv://gameplay:gameplay@gameplay-oseos.mongodb.net/gameplay?retryWrites=true&w=majority",
{ useNewUrlParser: true, useUnifiedTopology: true});

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);


app.listen("3333");