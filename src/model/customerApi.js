const mongoose = require('mongoose')
const customerSchema = new mongoose.Schema({


    firstName: String,
    lastName: String,

    mobileNumber: {
        type: String,
        maxLength: 10,
        description: "10 digits long"
    },
    DOB: {
        type: Date,
        default: Date.now()
    },
    emailID: {
        type: String,
        description: "abc@xyz.com"
    },
    address: String,
    customerID: {
        type: String,
        description: "UUID"
    },
    status: {
        type: String,
        enum:["ACTIVE","INACTIVE"]
    }
}, { timestamps: true })

module.exports = mongoose.model("Customer", customerSchema)