const PublicImageController = require("../app/controllers/PublicImageController")

module.exports = function(router) {
    router.get("/api/public-image", PublicImageController.index);
}
  