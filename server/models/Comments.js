import { Model, Schema } from "mongoose";

const CommentsSchema = new Schema(
    {
        content: { type: String, required: true },
        user: { type: Schema.Types.ObjectId, ref: "User",
        required: true },
        blog: { type: Schema.Types.ObjectId, ref: "Blogs",
        required: true },
    },
    {
     timestamps: true,
    }
 );

const Comments = Model ("Comments", CommentsSchema);

export default Comments;