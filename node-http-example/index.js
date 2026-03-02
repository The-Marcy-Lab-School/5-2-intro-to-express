const http = require('node:http');

const todos = [
  { id: 1, task: 'Learn Node' },
  { id: 2, task: 'Build a server' },
];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Route #1 — GET /api/todos → return all todos
  if (method === 'GET' && url === '/api/todos') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(todos));
    return;
  }

  // Route #2 — GET / → return a welcome message
  if (method === 'GET' && url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the API</h1>');
    return;
  }

  // Fallback Route — Anything else → 404
  res.writeHead(404, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ error: 'Not found' }));
});

server.listen(8080, () => console.log('Listening on http://localhost:8080'));