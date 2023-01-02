//Attribution: this code is 99% from class demo for lab 1
const express = require('express');
const server = express();

server.use(logger);
server.get('/hello', (req, res) => res.send('Hello!'));
server.use((req, res, next) => {
  if (req.method === 'GET' && req.path.startsWith('/hello')) {
    res.send('Hi there!');
  } else {
    next();
  }
});

//Note: Express middlewares operate in the order in which they have been added (called) to the server (not necessarily the order in which they were defined).

server.get('/hello', (req, res) => res.send('Hello!'));
server.get(
  '/hello/:name',
  (req, res) => res / send(`Hello, ${req.params.name}!`)
);

server.get('/goodbye', (req, res) => res.send('Nailed it!'));

// by convention this middleware is called a validator, it will check something on the request. If it's there great if it's not it will throw an error.
const nameValidator = (req, _, next) => {
  if (req.query?.name) {
    //"optional chaining"
    req.name = req.query.name;
    next();
  } else {
    next('Failed validation: No name in query!');
  }
};

server.use(nameValidator);

server.get('/person', (req, res) => {
  //  if(req.query.name){
  res.status(200).send({ name: req.query.name });
  //  } else {
  //    res.status(500).send();
  //  }
});

server.get('/throw_error', () => {
  throw new Error('Oh no the world!');
});

server.get('/pass_error', (req, res, next) => {
  next('Something bad');
});

server.use('*', (_, res) =>
  res.status(404).send('No error handler found, sorry Charlie!')
);

server.use((err, req, res, next) => {
  res.status(500).send({ message: 'there was a problem!', err });
});

module.exports = {
  server,
  nameValidator,
};

function logger(req, _, next) {
  // log out the request path
  console.log(req.path);
  next();
}
