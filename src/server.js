const http = require("node:http");

const PORT = Number.parseInt(process.env.PORT || "3000", 10);
const HOST = process.env.HOST || "0.0.0.0";

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    "Content-Type": "application/json; charset=utf-8",
  });
  response.end(JSON.stringify(payload, null, 2));
}

const server = http.createServer((request, response) => {
  if (request.url === "/health") {
    sendJson(response, 200, {
      status: "ok",
      service: "belajar-jenskins",
      time: new Date().toISOString(),
    });
    return;
  }

  sendJson(response, 200, {
    message: "Halo dari Node.js!",
  });
});

server.listen(PORT, HOST, () => {
  console.log(`Server berjalan di http://${HOST}:${PORT}`);
});
