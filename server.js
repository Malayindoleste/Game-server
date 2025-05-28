const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello dari Node.js di Termux! 🎉');
});

server.listen(3000, () => {
  console.log('Server jalan di http://localhost:3000');
});