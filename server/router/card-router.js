const express = require('express')
const router = express.Router()

const cardController = require("./../controller/card_controller")


router.post("/set" , cardController.creat)
router.get("/get" , cardController.get)
router.get("/getcards/:id" , cardController.getCards)


module.exports = router
