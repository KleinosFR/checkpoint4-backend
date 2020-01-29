const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

const Show = require("../sequelize/models/shows");
const Price = require("../sequelize/models/prices");

//GET ALL

router.get("/", async (req, res) => {
    try {
        const shows = await Show.findAll({ include: [{ model: Price }] });
        res.status(200).json(shows);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET ONE

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const showById = await Show.findOne({
            where: {
                uuid: id
            },
            include: [{ model: Price }]
        });
        res.status(200).json(showById);
    } catch (err) {
        res.status(400).json(err);
    }
});

// CREATE ONE

router.post("/", async (req, res) => {
    try {
        const newShow = req.body;
        await Show.create(newShow).then(show => res.status(201).json(show));
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE ONE

router.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;
        Show.destroy({ where: { uuid: id } });
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE ONE

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const showToUpdate = req.body;
    try {
        await Show.update(showToUpdate, { where: { uuid: id } });
        const updatedShow = await Show.findOne({ where: { uuid: id } });
        res.status(200).json(updatedShow);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
