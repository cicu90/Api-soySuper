const NodeCache = require("node-cache");


const cache = new NodeCache({
    stdTTL: 310,
    checkperiod: 310
});

let responseCache = new Map();
const verifyCache = (req, res, next) => {
    try {
        let key = '1';
        if (!(req.params['numberPage'] == undefined)) {
            key = req.params['numberPage'];
        }
        if (cache.has(key)) {
            return res.json(responseCache.get(key));
        }
        cache.set(key);
        return next();
    } catch (err) {
        console.log(err);
    }
};

function setResponseCache(key, value) {
    responseCache.set(key, value);
}

module.exports = {
    verifyCache,
    setResponseCache
};