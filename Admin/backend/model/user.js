const mongoose = require('mongoose')

//Schema

const Schema = mongoose.Schema;

//userSchema

const userSchema = new Schema({
    image: {
        type: String,
        required: true,
    },
    shirtName: {
        type: String,
        required: true,
    },
    shirtType: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    }

})


module.exports = mongoose.model('Shirt', userSchema)

//shirts