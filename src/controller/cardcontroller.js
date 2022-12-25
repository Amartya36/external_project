const cardModel = require('../model/cardApi')


exports.createCard =  async function(req,res){
    let data = req.body
    let savedData = await cardModel.create(data)
    return res.status(201).send({status: true, data: savedData})
}
/**************************************getdata**************************************************** */
exports.getCard = async function(req,res){
 let data = req.body
let saveddata = await cardModel.find(data)
return res.status(200).send({status: true, data: saveddata})
}