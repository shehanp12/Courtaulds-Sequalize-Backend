const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

function signUp(req, res) {



            bcryptjs.genSalt(10,function (err,salt) {
                bcryptjs.hash(req.body.password.salt,function (err,hash) {

                    const employee = {
                        firstName:req.body.firstName,
                        lastName: req.body.lastName,
                        phoneNumber:req.body.phoneNumber,
                        employeeAdress: req.body.employeeAdress,
                        departmentId: req.body.departmentId

                    }

                    models.Employee.create(employee).then(result => {
                        res.status(201).json({
                            message:"Employee created successfully"
                        });

                    }).catch(error =>{
                        res.status(500).json({
                            message:"Something went wrong!"
                        })
                    })
                })


            })


    //     .catch(error => {
    //     res.status(500).json({
    //         message: "Something went wrong!",
    //     });
    // });




}


module.exports ={
    signUp:signUp,

}
