const { response } = require("express");
const { cacheFn } = require("../cache/cache");
const { scrapping } = require("../crawler/crawler");

// const testScrapping = new ScrappingTesting();

const getDataController = async (req, res) => {
    try {
        let page = req.query.page;
        let crawlData = await scrapping(page);
        res.json(crawlData);
    } catch (error) {
        console.log(error);
    }
};

const cacheController = async () => {
    const url = "https://news.ycombinator.com/";
    try {
        let cacheResponse = await scrapping(url);
        res.json(cacheResponse);
    } catch (error) {
        console.log(error)
    }
}



module.exports = {
    getDataController,
    cacheController
};