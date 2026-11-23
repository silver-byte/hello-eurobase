const http = require('http');
const os = require('os');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const body = {
    message: 'hello from Eurobase',
    cpus: os.cpus().length,
    totalMemoryMB: Math.round(os.totalmem() / 1024 / 1024),
    totalMemoryBytes: os.totalmem(),
    time: new Date().toISOString()
  };
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
});

server.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
