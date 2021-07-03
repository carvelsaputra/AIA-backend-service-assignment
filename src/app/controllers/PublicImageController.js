const axios = require("../../plugins/axios");
const path = require("path");
// const fs = require("fs");
module.exports = class PublicImageController {
  static async index(req, res) {
    let request = await axios.get("photos_public.gne");
    let result = request.data;
    let tags = req.query.tags;

    let list = result.items;

    if (tags) {
      list = list.filter((row) => {
        return row.tags.includes(tags);
      });
    }

    list = list.map(async (row) => {
      let responseImage = await axios.get(row.media.m, {
        responseType: "arraybuffer",
      });
      row.media.photo = Buffer.from(responseImage.data, "binary").toString(
        "base64"
      );
      return row;
    });

    axios.all(list).then((list) => {
      res.send(list);
    });
  }
};
