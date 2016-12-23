var mongoose = require('mongoose');


var postSchema = new mongoose.Schema({
    autor: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
      createdOn: {
        type: Date,
        "default": Date.now
    }
   
});

mongoose.model('post', postSchema);