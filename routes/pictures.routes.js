const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

const Picture = require("../sequelize/models/pictures");

//GET ALL

router.get("/", async (req, res) => {
    try {
        const pictures = await Picture.findAll();
        res.status(200).json(pictures);
    } catch (err) {
        res.status(400).json(err);
    }
});

// GET ONE

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const pictureById = await Picture.findOne({
            where: {
                uuid: id
            }
        });
        res.status(200).json(pictureById);
    } catch (err) {
        res.status(400).json(err);
    }
});

// CREATE ONE

router.post("/", async (req, res) => {
    try {
        const newPicture = req.body;
        await Picture.create(newPicture).then(picture =>
            res.status(201).json(picture)
        );
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE ONE

router.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;
        Picture.destroy({ where: { uuid: id } });
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE ONE

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const pictureToUpdate = req.body;
    try {
        await Picture.update(pictureToUpdate, { where: { uuid: id } });
        const updatedPicture = await Picture.findOne({ where: { uuid: id } });
        res.status(200).json(updatedPicture);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
