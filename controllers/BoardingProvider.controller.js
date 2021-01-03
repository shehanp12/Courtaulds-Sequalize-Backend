const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

//boardingProvider signup
function signUp(req,res) {

    models.boardingProvider.findOne({where:{email:req.body.email}}).then(result =>{

        if(result){
            res.status(409).json({
                message:"This BoardingProvider is already exists "
            })
        }
        else{
            bcryptjs.genSalt(10,function (err,salt) {

                bcryptjs.hash(req.body.password,salt,function (err,hash) {

                    const boardingProvider = {

                        fullName: req.body.fullName,
                        email: req.body.email,
                        contactNumber: req.body.contactNumber,
                        userName:req.body.userName,
                        address:req.body.address,
                        password:hash
                    }

                    models.boardingProvider.create(boardingProvider).then(result => {
                        res.status(201).json({
                           success:true,
                            message:"BoardingProvider created successfully"
                        })
                    }).catch(error =>{
                        res.status(500).json({
                            success:false,
                            message:"Failed to Save"
                        })
                    })
                })

            })
        }

    })

}

//login
function login(req,res) {
    models.boardingProvider.findOne({where:{email:req.body.email}}).then(user => {
        if(user === null){
            res.status(401).json({
                success:false,
                message:"Invalid credentials!"
            })
        }else{
            bcryptjs.compare(req.body.password,user.password,function (err,result){
                if(result){
                    const token = jwt.sign({
                        email:user.email,
                        userId:user.id
                    },"secret",function (err,token) {
                        res.status(200).json({
                            success:true,
                            message:"Authentication successful!",
                            token:token
                        })

                    })
                }else{
                    res.status(401).json({
                        success:false,
                        message:"Invalid credentials!"
                    })
                }



            })


        }
    }).catch(error =>{
        res.status(500).json({
            success:false,
            message:"Something Error occurred"
        })
    })

}

module.exports = {
    signUp:signUp,
    login:login

}
