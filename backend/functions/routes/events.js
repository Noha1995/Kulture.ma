const express = require('express')
const router = express.Router()


const database=require('../index.js')



//get all events by category 
router.get('/:categorie', async (req, res) => {
    return res.status(200).send('cinema');
    });



module.exports ={
 route:router
} 