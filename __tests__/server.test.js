const server = require('../src/server');
const supertest = require('supertest');

// const { default: test } = require('node:test');

const request = supertest(server);

test('hello endpoint', async () => {
  const response = await request.get('/hello');
  expect(response.text).toBe('Hello!');
});

test('goodbye endpoint', async () => {
  const response = await request.get('/goodbye');
  expect(response.text).toBe('Nailed it!');
});
const server = require('./server');
const supertest = require('supertest');

// const { default: test } = require('node:test');

const request = supertest(server);

test('hello endpoint', async () => {
  const response = await request.get('/hello');
  expect(response.text).toBe('Hello!');
});

test('goodbye endpoint', async () => {
  const response = await request.get('/goodbye');
  expect(response.text).toBe('Nailed it!');
});