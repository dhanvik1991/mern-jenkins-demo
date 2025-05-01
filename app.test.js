const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello from Jenkins + MERN!');
});

describe('GET /', () => {
  it('should return greeting', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello from Jenkins + MERN!');
  });
});
