const cheerio = require("cheerio");
const { urlencoded } = require("express");
const request = require("request-promise");

async function scrapping(number) {
    const $ = await request({
        uri: 'https://news.ycombinator.com/',
        transform: (body) => cheerio.load(body),
    });

    const infoListTitle = [];
    const subTextInfo = [];
    
    const ListTitleLink = $(".titlelink").each((i, el) => {
        const listTitle = $(el).text();
        const ListUrl = $(el).attr("href");
    
        infoListTitle.push({listTitle, ListUrl});
        // console.log(infoListTitle)
        
        joinArray(infoListTitle, subTextInfo, $);
    });
    
    const joinArray = async (infoListTitle, subTextInfo, $) => {
    const listSubText = $(".subtext").each((i, el) => {
        const score = $(el).find('span.score').text();
        const user = $(el).find('hnuser').text();
        const age = $(el).find('span.age').text();
        const comments = $(el).find(":nth-child(6)").html();
        const commentsFormatHtml = formatHtml(comments);
        console.log(commentsFormatHtml);
    
        subTextInfo.push({user, score, age})
    })
    }
}



    

module.exports = {scrapping};
