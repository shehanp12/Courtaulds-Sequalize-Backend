const models = require('../models')

function boardingRegister(req,res) {

    const boardingHouse =   {

        title:req.body.title,
        subtitle: req.body.subtitle,
        description:req.body.description,
        distance: req.body.distance,
        perMonth: req.body.perMonth,
        keyMoney: req.body.keyMoney,
        imageUrl: req.body.imageUrl,
        userId:req.userData.userId

    }

    models.BoardingHouse.create(boardingHouse).then(result => {
        res.status(201).json({
            message: "Post created successfully",
            post: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        });
    });

}

module.exports ={
    boardingRegister:boardingRegister
}
