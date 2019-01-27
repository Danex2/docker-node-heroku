const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from app");
});

// use the port defined by heroku when deploying but port 4000 for local dev
app.listen(process.env.PORT || 4000, () => console.log("App running."));
