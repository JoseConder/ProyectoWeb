const http = require('http');
const fs = require('fs');

console.log('Hola mundo');

const server = http.createServer((req, res) => {
  const notFound = fs.readFileSync('./site/404.html');
  const file = req.url == '/' ? './site/landingPage.html' : `./site${req.url}`;

  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.write(notFound);
      res.end();
    } else {
      let contentType = 'text/html';

      if (file.endsWith('.css')) {
        contentType = 'text/css';
      } else if (file.endsWith('.js')) {
        contentType = 'application/javascript';
      } else if (file.endsWith('.jpeg') || file.endsWith('.jpg')) {
        contentType = 'image/jpeg';
      } else if (file.endsWith('.png')) {
        contentType = 'image/png';
      }

      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
});

server.listen(8888, () => {
  console.log('Servidor ejecutándose a través del puerto 8888 :D');
});
