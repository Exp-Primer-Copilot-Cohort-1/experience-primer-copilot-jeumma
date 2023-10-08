// Create web server

// Load modules
const http = require('http');
const fs = require('fs');

// Create server
const server = http.createServer(function (req, res) {
  // Read file
  fs.readFile('./public/index.html', function (err, data) {
    // Header
    res.writeHead(200, {'Content-Type': 'text/html'});
    // Write file
    res.write(data);
    // End response
    res.end();
  });
});

// Listen on port 3000
server.listen(3000, function () {
  console.log('Server is running on port 3000');
});
