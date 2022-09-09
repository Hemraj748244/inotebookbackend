const express = require('express');
const router = express.Router();
const User = require('../models/Users');
const { body, validationResult } = require('express-validator');
const fetchuser = require('../middlewares/fetchuser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const JWT_SECRET_SIGN = 'hemr@jsinght#@kur';

//ROUTE 1 : Creating a user (user registration) path: /api/auth/createuser no login required
router.post('/api/auth/createuser', [
  body('name', 'Enter a valid name').isLength({ min: 3 }),
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Enter a valid password').isLength({ min: 4 }),
  body('phonenumber', 'Enter a valid Phonenumber').isLength({ min: 10 }, { max: 10 })
],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      let user = await User.findOne({ email: req.body.email });//return a promise
      //if user is not present in the collection then findOne will return a null value 
      if (user) {
        return res.status(400).json({ message: "Sorry ,The user with the same email already exists" })
      }
      //encrypting the password
      const salt = await bcrypt.genSalt(10);
      const securePassword = await bcrypt.hash(req.body.password, salt);

      //if user doesn't exists then creating a new user below
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: securePassword,
        phonenumber: req.body.phonenumber
      });

      const data = {
        user: {
          id: user.id
        }
      }


      const authtoken = jwt.sign(data, JWT_SECRET_SIGN);



      console.log(authtoken);
      res.send(authtoken);
    } catch (error) {
      console.error(error);
      res.status(500).send("Some Error Occurred!")
    }


    //      .then(user => res.json(user)).catch(err=>{console.log({message : err}),res.json({error : "This email already exists please use another email or sign in.",message:err})})
    // console.log(req.body);
  });








//ROUTE 2 : Login a user  path: /api/auth/login ..

router.post('/api/auth/login', [
  body('email', 'Please enter valid credentials').isEmail(),
  body('password', 'Please enter valid credentials').isLength({ min: 4 }),
],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      let user = await User.findOne({ email: req.body.email });//return a promise
      //if user is not present in the collection then findOne will return a null value 
      if (!user) {
        return res.status(400).json({ message: "Invalid Credentials !" });
      }
      //Matching the password in the database using bcrypt.compare function -> first param : entered password ; Second param : password stored in db that we got from user = User.findOne({email:req.body.email});
      const matchPassword = bcrypt.compare(req.body.password, user.password);
      if (!matchPassword) {
        return res.status(400).json({ message: "Invalid Credentials !" });
      }
      //creating a object that will store the return
      const data = {
        user: {
          id: user.id
        }
      }


      const respected_auth_token = jwt.sign(data, JWT_SECRET_SIGN);
      console.log(respected_auth_token);
      res.json(respected_auth_token);


    } catch (error) {
      console.error(error);
      res.status(500).send("Some Error Occurred!")
    }

  })


//Route 3 : Getting the details of the user.


router.post('/api/auth/getuser', fetchuser, async (req, res) => {
  const userId = req.user.id;
  try {
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Some Error Occurred!")
  }
});


module.exports = router;