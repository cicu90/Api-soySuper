const { response } = require("express");

const getDataController = async (req, res) =>{
    const url = "https://news.ycombinator.com/";

    try {
        let convertJson = new Convert(url);
        
        await convertJson((convertJson) =>{
            if(convertJson){
                res.json(convertJson);
            } else{
                res.status(200).send({
                    response: "The crawler url has been successfully"
                });
            }
        })
    } catch(err){
        console.log(err);
    }
}


module.exports = {getDataController};