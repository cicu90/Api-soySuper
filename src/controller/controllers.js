const {
    response
} = require("express");
const {
    scrapping
} = require("../crawler/crawler");

const getDataController = async (req, res) => {
    try {
        let page = req.query.page;
        let rowsNumber = req.query.rows;
        let crawlData = await scrapping(page, rowsNumber);
        res.json(crawlData);
    } catch (error) {
        console.log(error);
    }
};





module.exports = {
    getDataController
};