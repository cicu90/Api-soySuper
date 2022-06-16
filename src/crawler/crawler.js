const cheerio = require("cheerio");
const request = require("request-promise");
const fs = require('fs-extra');
const writeStream = fs.createWriteStream('list.csv');

async function scrapping(number) {

    const allInfoArray = [];
    let index = 0;

    let urlArray = [];
    for (let index = 1; index <= number; index++) {
        urlArray.push(
            await request({
            uri: 'https://news.ycombinator.com/news?p=' + index,
            transform: (body) => cheerio.load(body),
        }));
    }

    writeStream.write('Title | User | Score | Age | Comments\n\n\n');
    
    urlArray.forEach(($) => {
        $(".titlelink").each((i, el) => {
            const listTitle = $(el).text();
            const listUrl = $(el).attr("href");
    
            let iterateObj = {
                listTitle: undefined,
                listUrl: undefined,
                user: undefined,
                score: undefined,
                age: undefined,
                comments: undefined,
                index: undefined,
            };
            iterateObj.listTitle = listTitle;
            iterateObj.listUrl = listUrl;
    
            allInfoArray.push(iterateObj);
        });
        $(".subtext").each((i, el) => {
            const score = $(el).find('.score').text();
            const user = $(el).find('.hnuser').text();
            const age = $(el).find('span.age').text();
            const commentsArray = [];
            $(el).find(":nth-child(6)").each((i, el) => commentsArray.push($(el).text()));
            const comments = commentsArray[0];
            allInfoArray[index].index = index;
            allInfoArray[index].user = user;
            allInfoArray[index].score = score;
            allInfoArray[index].age = age;
            allInfoArray[index].comments = comments;
            writeStream.write(`${allInfoArray[index].listTitle}|${allInfoArray[index].score}|${allInfoArray[index].user}|${allInfoArray[index].age}|${allInfoArray[index].comments}\n\n`);
            index++
        });
    })

    return allInfoArray;
}

module.exports = {
    scrapping
};