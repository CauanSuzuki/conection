const express = require("express");

const controllerHome = require("../controllers/home");

const router = express.Router();

router.get("/produto", controllerHome.listarTodos);
router.post("/produto", controllerHome.adicionar);
module.exports = router;
