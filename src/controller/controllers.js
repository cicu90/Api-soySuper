const { response } = require("express");
const { scrapping } = require("../crawler/crawler");

const getDataController = async (req, res) => {
    try {
        let page = req.query.page;
        let crawlData = await scrapping(page);
        res.json(crawlData);
    } catch (error) {
        console.log(error);
    }
};





module.exports = {
    getDataController
};