const cheerio = require("cheerio");
const request = require("request-promise");
const fs = require('fs-extra');
const writeStream = fs.createWriteStream('list.csv');

async function scrapping(number) {
    const numberPage = 30;
    const startingNumber = (number - 1) * numberPage;

    const allInfoArray = [];
    const pageInfoArray = [];


    const $ = await request({
        uri: 'https://news.ycombinator.com/',
        transform: (body) => cheerio.load(body),
    });

    writeStream.write('Title | User | Score | Age | Comments\n');

    $(".titlelink").each((i, el) => {
        const listTitle = $(el).text();
        const ListUrl = $(el).attr("href");
        $(".subtext").each((i, el) => {
            const score = $(el).find('.score').text();
            const user = $(el).find('hnuser').text();
            const age = $(el).find('span.age').text();
            const comments = [];
            $(el).find(":nth-child(6)").each((i, el) => comments.push($(el).text()));
            writeStream.write(`${listTitle}|${score}|${user}|${age}|${comments}\n`)
            allInfoArray.push({
                listTitle,
                ListUrl,
                user,
                score,
                age,
                comments
            });
        });
    });

    for (var i = startingNumber; i < numberPage * number; i++) {
        pageInfoArray.push({
            ...allInfoArray[i],
            "index": i
        });
    }
    // console.log(1, pageInfoArray)
    return pageInfoArray;
}

module.exports = {
    scrapping
};