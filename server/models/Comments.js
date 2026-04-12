import { Model, Schema } from "mongoose";

const  CommentsSchema = new Schema({

})

const Comments = Model ("Comments", CommentsSchema);

export default Comments;