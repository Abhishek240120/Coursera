const mongoose=require('mongoose')
const Schema=mongoose.Schema;
var NewsSchema = new Schema({
    date:{
        type:String
    },
    writer:{
        type:String
    },
    Heading:{
        type:String
    },
    starting:{
        type:String
    },
    news:{
        type:String
    },
    newsId:{
        type:String
    },
    category:{
        type:String
    },
    imageUrl:{
        type:String
    }
});




module.exports=mongoose.model('News',NewsSchema);
