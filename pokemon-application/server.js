const express = require('express');
const path = require('path');

const app = express();
const port = 5555;

// server static files 
// path.join method is used to construct an absolute path to the public directory 
// relative to the current directory where the server.js file is located.
app.use(express.static('../public'));
app.use('/pokemon-api', express.static('../pokemon-api'));
app.use('/app.js', express.static('../app.js'));

// start the server
app.listen(port, async () => {
    console.log(`Serving is listening on port ${port}`)
})