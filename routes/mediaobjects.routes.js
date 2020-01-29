const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "public/media/" });

// CREATE ONE

router.post("/", upload.single("image"), async (req, res) => {
    try {
        console.log(res);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
