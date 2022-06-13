const { response } = require("express");
const { scrapping } = require("../crawler/crawler");

const getDataController = async (req, res) =>{
    try {
            let crawlData = await scrapping(req.query.page);
            res.json(crawlData);
        } catch (error) {
            console.log(error);
        }
    };

const getDataPage = async (page) => {
    const url = `https://news.ycombinator.com/`;
    let crawlData = await scrapping(url);
    return crawlData;
}



module.exports = {getDataController};