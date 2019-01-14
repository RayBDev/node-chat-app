require("../config/config");
const path = require("path");
const http = require("http");
const express = require("express");
const socketIO = require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on("connection", socket => {
  console.log("New user connected");

  socket.emit("newMessage", {
    from: "Ray Bernard",
    text: "Hey. How you doing?",
    createdAt: new Date()
  });

  socket.on("createMessage", message => {
    console.log("Create Message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

server.listen(port, () => {
  console.log(`Started up at port ${port}`);
});
