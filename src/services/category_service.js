const CategoryModel = require('../models/category_model')
module.exports = {
    getAll : async (params) => {
       let data =  await CategoryModel.find({})
       return data
    },
    addItems : async (params) => {
       try {
         let { body } = params
         let data =  await CategoryModel.create({body})
         return data
       } catch (error) {
          console.log(error)
       }
     }
}