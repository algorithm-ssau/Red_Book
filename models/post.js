const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

mongoose.connect("mongodb+srv://user_1:GxD7rkKIUyZPvHUE@cluster0.fzwse.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true });

const postSchema = new Schema({
        name: String,
        description: String
});

const Fish = mongoose.model ('Fish', postSchema)

Fish.find({}, function(err, docs){
        mongoose.disconnect();
         
        if(err) return console.log(err);
         
        console.log(docs);
    }); 