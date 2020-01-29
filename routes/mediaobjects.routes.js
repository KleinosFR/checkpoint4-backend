const express = require("express");
const router = express.Router();
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "public/media/");
    },
    filename: function(req, file, cb) {
        const now = Date.now();
        return cb(null, `${file.fieldname}-${now}-${file.originalname}`);
    }
});
const upload = multer({ storage });

// CREATE ONE

router.post("/", upload.single("image"), async (req, res) => {
    try {
        const { originalname, filename, path } = res.req.file;
        console.log(res.req);
        res.status(201).json({ originalname, filename, path });
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;
