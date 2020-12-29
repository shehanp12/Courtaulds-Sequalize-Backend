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
        checkGirlsOnly:req.body.checkGirlsOnly,
        checkParkingOnly:req.body.checkParkingOnly,
        checkAttachBathroom:req.body.checkAttachBathroom,
        checkKitchen:req.body.checkKitchen,
        userId:req.userData.userId,

    }

    console.log(boardingHouse)

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

function boardingShow(req, res){
    models.BoardingHouse.findAll().then(result => {
        res.status(200).json(result);
    }).catch(error => {
        res.status(500).json({
            message: error
        });
    });
}

function show(req, res){
    const id = req.params.id;

    models.BoardingHouse.findByPk(id).then(result => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
                message: "Post not found!"
            })
        }
    }).catch(error => {
        res.status(500).json({
            message: error
        })
    });
}









module.exports ={
    boardingRegister:boardingRegister,
    boardingShow:boardingShow,
    show:show
}
