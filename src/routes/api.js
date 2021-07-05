const PublicImageController = require("../app/controllers/PublicImageController")

module.exports = function(router) {
    router.get('/', function(req, res) {
        res.send("test");
    })

    router.get("/api/public-image", PublicImageController.index);
}
  