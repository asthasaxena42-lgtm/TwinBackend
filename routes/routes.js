const express = require("express");
const router = express.Router();

const {
    getAppearances,
    createAppearance,
    updateAppearance,
    deleteAppearance
} = require("../controllers/appearanceController");

const validateAppearance = require("../middleware/validateAppearance");

router.get("/", getAppearances);

router.post("/", validateAppearance, createAppearance);

router.put("/:id", validateAppearance, updateAppearance);

router.delete("/:id", deleteAppearance);

module.exports = router;