import express from 'express';

const usercontroller = express.Router();

usercontroller.get("/profile", async()=> {

})

usercontroller.delete("/delete/:id", async()=> {
    
})
usercontroller.patch("/update", async()=> {
    
})
export default usercontroller;