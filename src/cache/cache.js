const NodeCache = require("node-cache");
const {
    scrapping
} = require("../crawler/crawler");

const cache = new NodeCache({
    stdTTL: 310,
    checkperiod: 310
});

//TODO 
async function cacheFn(page, fn) {
    let cache = {};

    if (!cache) {
        cache = await fn();
        console.log("Getting it from cache")
        return res.send(cache.get(`${page}`));
    } else {
        fetch(scrapping).then((response) => response.json()).then((json) => {
            cache.set(`${page}`, json);
            console.log("Getting it from API")
            res.send(json);
        })
        return cache;
    }
}

module.exports = {
    cacheFn
};