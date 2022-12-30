//Attribution: based on class demo for lab 1

const express = require('express');

const server = express();

server.get('/hello', (_, res) => res.send('Hello!'));
server.get('/goodbye', (_, res) => res.send('Nailed it!'));

module.exports = server;
