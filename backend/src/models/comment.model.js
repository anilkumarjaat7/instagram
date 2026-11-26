import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "posts",
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true
    },
    text: {
        type: String,
        required: [ true, "Comment text is required" ],
        trim: true,
        maxlength: 1000
    }
}, {
    timestamps: true
})

commentSchema.index({ post: 1 });

const commentModel = mongoose.model("comments", commentSchema)

export default commentModel;
