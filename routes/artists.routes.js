const express = require("express");
const router = express.Router();
const sequelize = require("sequelize");

const Artist = require("../sequelize/models/artists");

//GET ALL

router.get("/", async (req, res) => {
    try {
        const artists = await Artist.findAll();
        res.status(200).json(artists);
    } catch (err) {
        res.status(400).json(err);
    }
});



// GET ONE

router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const artistById = Artist.findOne({
            where: {
                uuid: id
            }
        });
        res.status(200).json(artistById);
    } catch (err) {
        res.status(400).json(err);
    }
});

// CREATE ONE

router.post("/", async (req, res) => {
    try {
        const newArtist = req.body;
        console.log(newArtist);
        Artist.create(newArtist).then(artist => res.status(201).json(artist));
    } catch (err) {
        res.status(400).json(err);
    }
});

// DELETE ONE

router.delete("/:id", (req, res) => {
    try {
        const { id } = req.params;
        Artist.destroy({ where: { uuid: id } });
        res.sendStatus(200);
    } catch (err) {
        res.status(400).json(err);
    }
});

// UPDATE ONE

router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const artistToUpdate = req.body;
    try {
        await Artist.update(artistToUpdate, { where: { uuid: id } });
        const updatedArtist = await Artist.findOne({ where: { uuid: id } });
        res.status(200).json(updatedArtist);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;