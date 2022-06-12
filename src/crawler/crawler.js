const cheerio = require("cheerio");
const { urlencoded } = require("express");
const request = require("request-promise");

async function scrapping(url) {
    const $ = await request({
        uri: 'https://news.ycombinator.com/',
        transform: (body) => cheerio.load(body),
    });

    const ListTitleLink = $(".titlelink").each((i, el) => {
        console.log(i, $(el).html())
    });

    // const itemList = $(".itemlist");
    // console.log(itemList.html());


}
scrapping();
