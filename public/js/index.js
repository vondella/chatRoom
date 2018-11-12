var socket = io();
socket.on("connect", () => {
  console.log("connected to server");

  socket.emit("createMessage", {
    to: "vondella21",
    text: "hi there"
  });
});

socket.on("disconnect", () => {
  console.log("disconnected from server");
});
socket.on("newEmail", email => {
  console.log("new email received", email);
});
socket.on("newMessage", message => {
  console.log("new message received", message);
});
