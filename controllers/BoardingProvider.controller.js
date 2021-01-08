const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

//boardingProvider signup
function signUp(req, res) {
    if ((!req.body.fullName)
        || (!req.body.email) ||
        (!req.body.contactNumber) || (!req.body.password) ||
        (!req.body.address) || (!req.body.userName)) {

        res.json({success: false, msg: 'Enter all fields'})

    }

    models.boardingProvider.findOne({where: {email: req.body.email}}).then(result => {

        if (result) {
            res.status(409).json({
                                     message: "This BoardingProvider is already exists "
                                 })
        } else {
            bcryptjs.genSalt(10, function (err, salt) {

                bcryptjs.hash(req.body.password, salt, function (err, hash) {

                    const boardingProvider = {

                        fullName: req.body.fullName,
                        email: req.body.email,
                        contactNumber: req.body.contactNumber,
                        userName: req.body.userName,
                        address: req.body.address,
                        password: hash
                    }

                    models.boardingProvider.create(boardingProvider).then(result => {
                        res.status(201).json({
                                                 success: true,
                                                 message: "BoardingProvider created successfully"
                                             })
                    }).catch(error => {
                        res.status(500).json({
                                                 success: false,
                                                 message: error
                                             })
                    })
                })

            })
        }

    })

}

//login
function login(req, res) {
    models.boardingProvider.findOne({where: {email: req.body.email}}).then(user => {
        if (user === null) {
            res.status(401).json({
                                     success: false,
                                     message: "Invalid credentials!"
                                 })
        } else {
            bcryptjs.compare(req.body.password, user.password, function (err, result) {
                if (result) {
                    const token = jwt.sign({
                                               email: user.email,
                                               userId: user.id
                                           }, "secret", function (err, token) {
                        res.status(200).json({
                                                 success: true,
                                                 message: "Authentication successful!",
                                                 token: token
                                             })

                    })
                } else {
                    res.status(401).json({
                                             success: false,
                                             message: "Invalid credentials!"
                                         })
                }


            })


        }
    }).catch(error => {
        res.status(500).json({
                                 success: false,
                                 message: error
                             })
    })

}

function showProviders(req,res) {
    const id = req.userData.id;

    models.boardingProvider.findOne({where: {id: req.userData.userId}}).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message:"This user is not exsist"
                                 })
        }
    }).catch(error =>{
        res.status(500).json({
            message:error
                             })
    })


}

module.exports = {
    showProviders:showProviders,
    signUp: signUp,
    login: login

}
