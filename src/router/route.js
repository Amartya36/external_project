const express = require('express')
const router = express.Router()
const{createCustomer,getcustomer,deleteCustomer} = require('../controller/customerController')


router.post('/customer',createCustomer )
router.get('/getcustomer', getcustomer)
router.delete('/deletecustom/:blogId',deleteCustomer)

module.exports = router