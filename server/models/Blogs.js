import { Model, Schema } from "mongoose";

const  blogSchema = new Schema({
    title: { type: String, requird: true },
    conetent: { type: String, requird: true},
    status: { 
        type: String,
        default:"draft", 
        enum:["draft", "published", "archived"],
  },
    category:{type: String, required: true},
    publisgedAt: {type: Date},
    author: { type: Schema.Types.ObjectId, ref: "User", required:true},
  },{
    timestamps: true,
  }
);

const Blogs = Model ("Blog", blogSchema);

export default Blogs;