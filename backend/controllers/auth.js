import express from 'express';
import User from '../model/user'
import jwt from 'jsonwebtoken';
const authcontroller = express.Router();

const createToken = (_id) => {
    return jwt.sign({_id}, process.env.SECRET, { expiresIn: '3d' })
  }

authcontroller.post("/signup", async(req,res)=> {
   const {email, password}  = req.body;

   try {
    const user = await User.signup(email,password)

    const token = createToken(user._id)
    res.status(200).json(email, token)
   } catch (error) {
    res.status(400).json({error: error.message})
   }
})

authcontroller.post("/login", async()=> {
    const {email, password}  = req.body;

   try {
    const user = await User.login(email,password)

    const token = createToken(user._id)

    res.status(200).json(email, token)
   } catch (error) {
    res.status(400).json({error: error.message})
   }
})
export default authcontroller;