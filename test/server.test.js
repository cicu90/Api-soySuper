const app = require("../server");
const request = require("supertest");

describe('First Endpoint', () => {
    test('get the url correct', async () =>{
        const res = await request(app).get('/').send();
        expect(res.statusCode).toEqual(200)
    })
});

describe('Second Endpoint /2 ', () => {
    test('the url change when user use more page (/2)', async () =>{
        const res = await request(app).get('/2').send();
        expect(res.statusCode).toBe(200);
    })
})