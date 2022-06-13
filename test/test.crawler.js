const { isTag } = require("domhandler");
const crawler = require("../src/crawler/crawler");

describe("the crawler", () => {

    let testing;

    iT("getDataController() return array allInfoArray of 30 obj", async() => {
        const testScrapping = new scrappingTesting();
        testing = await testScrapping.getDataController(1);
        expect(testing).tobeInstanceOf(Array);
        expect(testing.legth).toBe(30);
    })


})