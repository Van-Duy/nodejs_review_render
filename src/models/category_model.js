const { Schema , model } = require("mongoose")

const CategoryModel = new Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 50,
      },
    status: {
        type: String,
        enum: ['active', 'inactive'],
    },
    ordering: {
        type: Number,
        default: 0,
    },
    description: {
        type: String,
        default: '',
    },
}, {
    timestamps : true
}) 

module.exports = model('categories' , CategoryModel)