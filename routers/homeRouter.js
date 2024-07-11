// je récupère expresse et j'utilise la méthode Router pour créer un nouveau router
const express = require("express");
const router = express.Router();
const homeController = require(`${__dirname}/../controllers/homeController`);


// mes routes définis
router.get("/", homeController.homePage);


module.exports = router;