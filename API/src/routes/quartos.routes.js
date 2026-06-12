const express = require("express");

const router = express.Router();

const { 
    listar,
    cadastrar, 
    excluir } = require("../controllers/quartos.controllers");

router.get("/", listar);
router.post("/", cadastrar);
router.delete("/:id", excluir);

module.exports = router;