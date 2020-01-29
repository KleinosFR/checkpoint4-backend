const express = require("express");
const router = express.Router();

const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PW = process.env.ADMIN_PW;

// CHECK USER

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    if (username === ADMIN_USERNAME && password === ADMIN_PW) {
        res.status(200).json({ authorisation: true });
    } else {
        res.status(401).json({
            authorisation: false,
            message: "Bad credentials"
        });
    }
});

module.exports = router;
