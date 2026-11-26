import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    imageUrl: {
        type: String,
        required: [ true, "Image URL is required" ],
        trim: true
    },
    caption: {
        type: String,
        trim: true,
        maxlength: 2000,
        default: ""
    }
}, {
    timestamps: true
})

const postModel = mongoose.model("posts", postSchema)

export default postModel;
