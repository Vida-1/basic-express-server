//Attribution: based on class demo for lab 1

const express = require('express');

const server = express();

server.get('/hello', (req, res) => res.send('Hello!'));
server.get('/goodbye', (req, res) => res.send('Nailed it!'));




server.get('/person', (req, res) => {
  if(req.query.name){
  res.status(200).send({ name: 'Picard' });
  } else {
  res.status(500).send();
  }
});

module.exports = server;
