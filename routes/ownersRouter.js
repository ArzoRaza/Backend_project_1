const express = require('express');
const router = express.Router();
const ownerModel = require("../models/owner-model");

// if(process.env.NODE_ENV === "development") {
//     router.post("/create", async function (req, res) {
//         console.log("POST/ create called");
//         let owners = await ownerModel.find();
//         console.log("Owners found:", owners);
//         if (owners.length > 0) {
//             console.log("Permission denied: Owners already exist");
//             return res.status(503).send("Permission denied");
//         }
//         console.log("No owners found: we can create a new owners");
//         res.send("We can create a new owner");
//     });
// }

// router.get("/", function (req, res) {
//     console.log("GET/ called");
//     res.send("hey it's working (ownerA)");
// });


router.get("/", function (req, res) {
    res.send("hey it's working (properly)");
});

if(process.env.NODE_ENV === "development"){
    router.post("/create", function(req, res){
        res.send("hey it's working");
    });
};

module.exports = router;
