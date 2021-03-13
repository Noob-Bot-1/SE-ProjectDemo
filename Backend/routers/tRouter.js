const router = require("express").Router();
const { model } = require("mongoose");
const Test = require("../models/testModel");
const auth = require("../middleware/auth");

router.post("/",auth, async (req,res) =>{
    try{
        const {name} = req.body;

        const newTest = new Test({name});

        const saveTest = await newTest.save();

        res.json(saveTest);

    }catch(err){
        console.error(err);
        res
            .status(401)
            .json({errorMessage: "Unauthorised"});
    };

});

module.exports = router;