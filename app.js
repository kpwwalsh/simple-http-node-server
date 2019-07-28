const http = require('http');
const port = 3000;

// Handles HTTP requests.
const requestHandler = (request, response) => {
    fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
        console.log('success');
    });
    response.end('file created');
}

// Create a server and pass in the  requestHandler function
const server = http.createServer(requestHandler);

// Start the server listening on port 3000
server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }

  console.log(`server is listening on ${port}`);
});