const NodeCache = require("node-cache");


const cache = new NodeCache({
    stdTTL: 310,
    checkperiod: 310
});

let responseCache = null;
const verifyCache = (req, res, next) => {
    try {
        let key = 1;
        if (!(req.params['numberPage'] == undefined)) {
            key = req.params['numberPage'];
        }
        if (cache.has(key)) {
            return res.json(responseCache);
        }
        cache.set(key);
        return next();
    } catch (err) {
        console.log(err);
    }
};

function setResponseCache(data) {
    responseCache = data;
}

module.exports = {
    verifyCache,
    setResponseCache
};