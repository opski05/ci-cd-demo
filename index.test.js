const request = require('supertest');
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello CI/CD!');
});

describe('GET /', () => {
  it('should return Hello CI/CD!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello CI/CD!');
    expect(res.statusCode).toBe(200);
  });
});
