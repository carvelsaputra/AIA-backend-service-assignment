const axios = require("../../plugins/axios");
const path = require("path");
// const fs = require("fs");
module.exports = class PublicImageController {
  static async index(req, res) {
    let request = await axios.get("photos_public.gne");
    let result = request.data;

    let list = result.items.map((row) => {
      // const filename = path.basename(row.media.m);
      let image;
      axios.get(row.media.m, { responseType: "arraybuffer" }).then((res) => {
        image = Buffer.from(res.data, "binary").toString("base64");
        row.media.photo = image;

        console.log(row);
      });
      return row;
    });
    res.send(list);
  }
};
