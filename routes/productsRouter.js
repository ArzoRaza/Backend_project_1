const express = require('express');
const router = express.Router();

router.get("/", function (req, res){
    res.send("hey Akbar (product)");
});

module.exports = router;