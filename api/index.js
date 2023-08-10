const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ hello: "world" });
});

app.listen(5000, () => console.log("Server listens on port 5000"));
