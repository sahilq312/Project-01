import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    userID : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    caption : {
        type: String,
        required: true
    },
    image : {
        type: String
    }
})
module.exports = mongoose.model('Post', postSchema)