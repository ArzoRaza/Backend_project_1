const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");

require('dotenv').config();
if(process.env.NODE_ENV === "development"){
    router.post("/create", function (req, res){
        res.send("hey it's working ");
    });
};


router.get("/", function (req, res){
    res.send("hey it's working (owner)");
});




module.exports = router;