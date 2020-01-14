const express = require("express");
const app = express();
const  mongoose= require("mongoose");

const config = require("config");

console.log(config);

const PORT = config.get("port") || 5000;

app.use('/api/auth',require('./routes/authroute'));

async function start() {
  try {
    await mongoose.connect(config.get("mongoUrl"));

    app.listen(PORT, () => {
      console.log("listening port", PORT);
    });
  } catch (e) {
    console.log("something went wrong...", e.message);
    process.exit(1)
  }
}
start();
