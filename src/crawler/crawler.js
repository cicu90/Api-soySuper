const cheerio = require("cheerio");
const { urlencoded } = require("express");
const request = require("request-promise");

async function scrapping(url) {
    const obtain = await request({
        uri: 'https://news.ycombinator.com/',
        transform: (body) => cheerio.load(body),
    });
    const webHackerTitle = obtain('title');
    console.log(webHackerTitle.html());

    const ListTitleLink = obtain(".titlelink").find('a');
    console.log(ListTitleLink.html());

    const itemList = obtain(".itemlist");
    console.log(itemList.html());


}
scrapping();
