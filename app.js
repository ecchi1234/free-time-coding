const WebSocket = require("ws");

// Tạo máy chủ WebSocket lắng nghe trên cổng 8080
const wss = new WebSocket.Server({ port: 8080 });

// Xử lý kết nối từ các máy khách
wss.on("connection", function connection(ws) {
  console.log("Client connected");

  // Xử lý các thông điệp từ máy khách
  ws.on("message", function incoming(message) {
    console.log("Received message:", message);
    // Xử lý thông điệp nhận được từ máy khách
  });

  // Xử lý sự kiện khi kết nối bị đóng
  ws.on("close", function () {
    console.log("Client disconnected");
  });
});
