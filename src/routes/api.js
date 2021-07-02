const PublicImageController = require("../app/controllers/PublicImageController")

module.exports = function(router) {
    router.get("/", PublicImageController.index);
}
  