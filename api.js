const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({
    status: 'success',
    message: 'ข้อความจำลอง API จาก api.js'
  }));
});

server.listen(3000, () => {
  console.log('Mock API running at http://localhost:3000');
});
