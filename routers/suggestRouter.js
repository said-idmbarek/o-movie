// je récupère expresse et j'utilise la méthode Router pour créer un nouveau router
const express = require("express");
const router = express.Router();
const suggestController = require(`${__dirname}/../controllers/suggestController`);


// mes routes définis
router.get("/suggestion", suggestController.displayForm);
router.post("/suggestion", suggestController.handleForm);


module.exports = router;