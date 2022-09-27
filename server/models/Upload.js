const mongoose = require('mongoose');

const uploadSchema = mongoose.Schema({
    title: {
        type: String,
    },
    discription: {
        type: String,
    },
    name: {
        type: String,
    },
    birth: {
        type: Number,
        maxlength: 8
    },
    introduce: {
        type: String
    }

})

const Upload = mongoose.model('Upload', uploadSchema);

module.exports = { Upload }