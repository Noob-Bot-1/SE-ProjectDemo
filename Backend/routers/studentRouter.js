const router = require("express").Router();

router.post("/", (req,res) => {
    try{
        const{email, password, passwordVerify} = req.body;

        if(!email || !password || !passwordVerify)
            return res
               .status(400)
               .json({errorMessage: "Please enter all details"});
        
        if(password.lenght <= 8)
            return res
               .status(400)
               .json({errorMessage: "Please enter a password of more than 8 characters"});

        if(password !== passwordVerify)
            return res
                .status(400)
                .json({errorMessage: "Please enter the same password twice"});

    }catch(err) {
        console.error(err);
        res.status(500).send();
    }
});

module.exports = router;