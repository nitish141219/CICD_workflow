const request = require('supertest');
const app = require('../src/index');

describe('GET /', () => {
  it('should return Hello, Azure DevOps!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('Hello, Azure DevOps!');
  });
});
