
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const cardSchema = new mongoose.Schema({

cardNumber: {
    type: String,
        description: "Auto_increment e.g: C001",
},
        cardType: {
        type: String,
        enum: ["REGULAR", "SPECIAL"]
},
    customerName: {
        type: String
    },

    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        Default: "ACTIVE"
},
    vision: String,
        customerID: {
        type: ObjectId,
        Ref: "Customer"
    }
},{timestamps:true})
module.exports= mongoose.model("Card", cardSchema)