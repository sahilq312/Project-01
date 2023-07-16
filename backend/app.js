import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authcontroller from './controllers/auth.js';
import usercontroller from './controllers/user.js';


const app = express();
app.use(cors())
app.use(express.json());

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/project')
  .then(console.log("db is connected"))

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

app.use("/auth", authcontroller)
app.use("/user", usercontroller)

app.listen(process.env.PORT , ()=> {
    console.log("server is connected");
} )