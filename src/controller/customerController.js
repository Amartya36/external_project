const customerModel = require('../model/customerApi');


/**************************************************createcustomer************************************************** */
 exports.createCustomer = async function(req, res){
 let data = req.body
 try{
 let savedData = await customerModel.create(data)
 return res.status(201).send({status: true, msg: "customerCreated", data: savedData})
 }
 catch(error){
    return res.status(500).send({status: false, message: error.message})
 }
} 
/*********************************************getcustomer  ********************************************** */
exports.getcustomer = async function(req,res){

    let data = await customerModel.find({status: "ACTIVE"})
    return res.status(200).send({status:true, data: data})
}
/*************************************************deleteCustomer********************************************/
exports.deleteCustomer = async function(req,res){
let blogId = req.params.blogId
 await customerModel.findOneAndUpdate({_Id:blogId},{
    $set:{
    status: "INACTIVE",
   
}},{new:true})

return res.status(200).send({status:true, msg:"this data  is deleted"})

}