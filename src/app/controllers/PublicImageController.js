const axios = require("../../plugins/axios")
const parser = require("../../plugins/xml2json")
module.exports = class PublicImageController {
    static async index(req, res) {
        let x = await axios.get("photos_public.gne")
        let result = x.data
        res.send(result);
    }
}