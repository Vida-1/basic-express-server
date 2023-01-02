const {server, nameValidator} = require('../src/server');
const supertest = require('supertest');
const { get } = require('../src/server');

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

describe('Person Route', () => {
  // Person Route
  // Method: GET
  // Path: /person
  // Expectes a query string from the user with the "name" property

  test('When query string present, output JSON to the client with this shape: {name: "name provided" }', async () => {
    const response = await request.get('/person?name=Picard');
    expect(response.statusCode).toBe(200);                    // toBe is deep equality triple equals
    expect(response.body).toEqual({ name: 'Picard' });   // toEqual looks at properties 
 
  });

  test("Without a name in the query string, force a 500 error", async () => {
    const response = await request.get('/person');
    expect(response.statusCode).toBe(500);
  });

  test('When query string presents with a different name, output JSON to the client with this shape: {name: "name provided"} ', async () => {
    const response = await request.get('/person');
    expect(response.statusCode).toBe(500);
  });

  describe(`name validator`, () => {
    test('with name Fauntleroy', () => {
      const req = { query: { name: 'Fauntleroy' } };
      const next = jest.fn();

      nameValidator(req, {}, next);
 
      expect(req.name).toBe('Fauntleroy');
      expect(next).toHaveBeenCalled();
    });

      test('with no name', () => {
      const req = { query:{}};
      const next = jest.fn();
      nameValidator(req, {}, next);
      
      expect(next).toHaveBeenCalledWith('Failed validation: No name in query!');
    });
  });
});