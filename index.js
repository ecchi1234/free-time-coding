const WebSocket = require("ws");

const express = require("express");
const app = express();
const port = 8080;

// Tạo máy chủ http bằng cách sử dụng app.listen
const server = app.listen(port, function () {
  console.log("Your app running on port " + port);
});
// Tạo máy chủ webSocket và liên kết với máy chủ HTTP
const wss = new WebSocket.Server({ server });
// Xử lý kết nối từ các máy khách
wss.on("connection", function connection(ws) {
  console.log("Client connected");

  ws.on("message", function incoming(message) {
    console.log("Received message:", message);
    // Xử lý thông điệp nhận được từ máy khách
  });

  ws.on("close", function () {
    console.log("Client disconnected");
  });
});

app.get("/", function (req, res) {
  res.send("Hello World");
});

// Gửi thông điệp từ ứng dụng Express.js đến tất cả các kết nối WebSocket
app.get("/send-message", function (req, res) {
  wss.clients.forEach(function each(client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send("Hello from Express!");
    }
  });
  res.send("Message sent to all clients");
});
