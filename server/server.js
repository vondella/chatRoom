const path = require("path");
const express = require("express");
const socketIO = require("socket.io");
const http = require("http");
const publicPath = path.join(__dirname, "../public");
const { generateMethod } = require("./utils/message");
console.log(__dirname + "/../public");
console.log(publicPath);
const port = process.env.port || 3000;

const app = express();
const server = http.createServer(app);
const io = socketIO(server);
app.use(express.static(publicPath));
io.on("connection", socket => {
  console.log("new user connected");

  socket.emit("newEmail", {
    from: "vondella21@gmail.com",
    text: "hi there"
  });

  socket.emit("newMessage", {
    from: "vondella",
    text: "hi there"
  });

  socket.on("createMessage", message => {
    console.log("createMessage", message);
    // io.emit("newMessage", {
    //   to: "vondella21",
    //   text: "hi there",
    //   createdAt: new Date().getTime()
    // });
    socket.broadcast.emit("newMessage", generateMethod("vondella", "hi there"));
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});
server.listen(port, () => {
  console.log(`server is up on port  ${port}`);
});
