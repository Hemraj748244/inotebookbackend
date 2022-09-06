const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
   res.send("Hello Notes API !")
   console.log("Notes API called !")
})

module.exports = router;