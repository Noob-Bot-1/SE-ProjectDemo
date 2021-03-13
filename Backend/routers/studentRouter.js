const router = require("express").Router();
const Student = require("../models/studentModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/",async (req,res) => {
    try{
        const{email, password, passwordVerify} = req.body;

        if(!email || !password || !passwordVerify)
            return res
               .status(400)
               .json({errorMessage: "Please enter all details"});
        
        if(password.length <= 8)
            return res
               .status(400)
               .json({errorMessage: "Please enter a password of more than 8 characters"});

        if(password !== passwordVerify)
            return res
                .status(400)
                .json({errorMessage: "Please enter the same password twice"});

        const existingStudent = await Student.findOne({email});
            if(existingStudent)
                return res
                    .status(400)
                    .json({errorMessage: "An account with this email already exists"});


        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password,salt);

        const newStudent = new Student({
            email,passwordHash
        });

        const savedStudent = await newStudent.save();

        const token = jwt.sign({
            student : savedStudent._id
        }, process.env.JWT_SECRET);

        res
            .cookie("token", token, {
                httpOnly: true,
            })
            .send();

    }catch(err) {
        console.error(err);
        res.status(500).send();
    }
});

module.exports = router;