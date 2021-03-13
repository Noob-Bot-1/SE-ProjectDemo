const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");

const PORT = 5000;
// app.use();
app.use(express.json());
app.use(cookieParser());

mongoose.connect(process.env.MDB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use("/auth", require("./routers/studentRouter"));

app.use("/hi", require("./routers/tRouter"));

app.listen(PORT, () => console.log('Server started on port:'+ PORT));
