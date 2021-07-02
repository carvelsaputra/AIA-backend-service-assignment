const axios = require("../../plugins/axios")
const parser = require("../../plugins/xml2json")
module.exports = class PublicImageController {
    static async index(req, res) {
        let x = await axios.get("https://api.flickr.com/services/feeds/photos_public.gne")
        let result = parser.toJson(x.data)
        res.send(result);
    }
}