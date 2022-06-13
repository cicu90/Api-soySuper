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
    // let cache = {};

    // if (!cache) {
    //     cache = await fn();
    //     console.log("Getting it from cache")
    //     return res.send(cache.get(`${page}`));
    // } else {
    //     fetch(scrapping).then((response) => response.json()).then((json) => {
    //         cache.set(`${page}`, json);
    //         console.log("Getting it from API")
    //         res.send(json);
    //     })
    //     return cache;
    // }
}

// const cache = {};
let responseCache = null;
const verifyCache = (req, res, next) => {
    try {
        let key = 1;
        if(!(req.params['numberPage'] == undefined)){
            key = req.params['numberPage'];
        }
        if(cache.has(key)){
            return res.json(responseCache);
        }
        cache.set(key);
        return next();
    } catch (err) {
      console.log(err);
    }
  };

function setResponseCache(data){
    responseCache = data;
}

module.exports = {
    verifyCache, setResponseCache
};