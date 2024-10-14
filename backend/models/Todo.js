const mongoose=require("mongoose");

const TodoSchema =new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            maxLength:50
        },
        description:{
            type:String,
            maxLength:200,
            required:true
        },
        createdAt:{
            type:Date,
            default:Date.now,
            required:true
        }
    
    }
)
module.exports =mongoose.model("Todo", TodoSchema);