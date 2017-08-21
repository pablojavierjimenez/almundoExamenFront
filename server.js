/*
* DEPENDEncies
*/
const path = require('path');
const http = require('http');
const express = require('express');
//const bodyParse = require('body-parse');

/**
 * Get Api Router
 */
const api = require('./api/routers/api');
const app = express();
//console.log(api);

/**
 * Parsers for POST data
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: false }));
 */

/**
 * Point static path to dist
 */
app.use(express.static(path.join(__dirname, 'dist')));

/**
 * Set our api routes
 */
app.use('/api', api);

/**
 * Catch all other routes and return the index file
 */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));
