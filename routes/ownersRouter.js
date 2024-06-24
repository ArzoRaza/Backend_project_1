const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");

if (process.env.NODE_ENV === "development") {
    router.post("/create", async function(req, res) {
        let owners = await ownerModel.find();
        if (owners.length > 0) {
            return res.send(503).send("permission denied");
        }
        console.log(process/env.NODE_ENV)
        let { fullname, email, password} = req.body;

        let createOwner = await ownerModel.create ({
            fullname,
            email,
            password,
        });
        res.status(201).send(createOwner);
    });
}

router.get("/", function (req, res) {
    console.log("GET/ called");
    res.send("hey it's working (ownerA)");
});


// router.get("/", function (req, res) {
//     res.send("hey it's working (properly)");
// });



module.exports = router;
