const http = require('http');
const port = 3000;
const fs = require('fs');

// Handles HTTP requests.
const requestHandler = (request, response) => {
    response.end('Handling a request on port ${port}') 
    };
fs.writeFile('hello-world.txt', 'Hello to this great world', (err) => {
        if(err) throw err;
        console.log('your file has been written');
    });

    const server = http.createServer(requestHandler);    

    // Start the server listening on port 3000    
   server.listen(port, (err) => {    
     if (err) {    
       return console.log(`You have an error:  ${err}`);    
     }    
   
      console.log(`server is listening on ${port}`);    
   });

