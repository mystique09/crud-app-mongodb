const request = require('supertest');
const app = require('../app');

describe('Test case for auth route', () => {

    describe('POST /auth/sign-in', (done) => {
        const req = request(app).get('/auth/sign-in');
        req.expect(200);
    });
});