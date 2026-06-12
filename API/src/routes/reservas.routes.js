const express = require("express");

const router = express.Router();

const { 
    listar,
    listarPorQuarto,
    cadastrar, 
    excluir } = require("../controllers/reservas.controllers");

router.get("/", listar);
router.get("/quarto/:id", listarPorQuarto);
router.post("/", cadastrar);
router.delete("/:id", excluir);

module.exports = router;