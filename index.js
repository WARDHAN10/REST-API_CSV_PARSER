const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();
const crudRoutes = require("./routes/Crud");
const cors = require("cors");

app.use("/kalpas", crudRoutes);
app.get("/", (req, res) => {
  res.json("its working");
});

mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB CONNECTED");
  });

PORT = 7000;
app.listen(PORT || 7000, console.log("port is working"));
