const express = require("express");
let socket = require("socket.io");

const app = express();

const server = app.listen(5000, () =>
  console.log("Server listens on port 5000")
);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const io = socket(server);

io.on("connection", (socket) => {
  socket.on("chat", (data) => {
    console.log("Data", data);

    io.sockets.emit("chat", data);
  });

  socket.on("typing", (name) => {
    socket.broadcast.emit("typing", name);
  });
});
