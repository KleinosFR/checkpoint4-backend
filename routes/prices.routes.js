const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

const Price = require("../sequelize/models/prices");

//GET ALL

router.get("/", async (req, res) => {
    try {
        const prices = await Price.findAll();
        res.status(200).json(prices);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET ONE

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const priceById = Price.findOne({
            where: {
                uuid: id
            }
        });
        res.status(200).json(priceById);
    } catch (err) {
        res.status(400).json(err);
    }
});

// CREATE ONE

router.post("/", async (req, res) => {
    try {
        const newPrice = req.body;
        await Price.create(newPrice).then(price => res.status(201).json(price));
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE ONE

router.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;
        Price.destroy({ where: { uuid: id } });
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE ONE

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const priceToUpdate = req.body;
    try {
        await Price.update(priceToUpdate, { where: { uuid: id } });
        const updatedPrice = await Price.findOne({ where: { uuid: id } });
        res.status(200).json(updatedPrice);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
