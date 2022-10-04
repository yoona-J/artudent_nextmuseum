const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const uploadSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
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
    },
    images: {
        type: Array,
        default: []
    }
})

const Upload = mongoose.model('Upload', uploadSchema);

module.exports = { Upload }