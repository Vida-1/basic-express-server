//Attribution: based on class demo for lab 1

const express = require('express');

const server = express();

server.get('/hello', (_, res) => res.send('Hello!'));
server.get('/goodbye', (_, res) => res.send('Nailed it!'));

server.get('/person', (_, res) => {
  if(_.query.name){
  res.status(200).send({ name: 'Picard' });
  }else{
  res.status(500).send();
  }
});

module.exports = server;
