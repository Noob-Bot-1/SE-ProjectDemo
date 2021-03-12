const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv").config();

const PORT = 5000;

app.use(express.json());

mongoose.connect(process.env.MDB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use("/auth", require("./routers/studentRouter"));

app.listen(PORT, () => console.log('Server started on port:'+ PORT));
