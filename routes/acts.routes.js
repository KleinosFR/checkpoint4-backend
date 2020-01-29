const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

const Act = require("../sequelize/models/acts");

//GET ALL

router.get("/", async (req, res) => {
    try {
        const acts = await Act.findAll();
        res.status(200).json(acts);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET ONE

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const actById = Act.findOne({
            where: {
                uuid: id
            }
        });
        res.status(200).json(actById);
    } catch (err) {
        res.status(400).json(err);
    }
});

// CREATE ONE

router.post("/", async (req, res) => {
    try {
        const newAct = req.body;
        await Act.create(newAct).then(act => res.status(201).json(act));
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE ONE

router.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;
        Act.destroy({ where: { uuid: id } });
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE ONE

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const actToUpdate = req.body;
    try {
        await Act.update(actToUpdate, { where: { uuid: id } });
        const updatedAct = await Act.findOne({ where: { uuid: id } });
        res.status(200).json(updatedAct);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
