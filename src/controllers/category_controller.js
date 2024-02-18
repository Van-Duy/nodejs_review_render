const routerName = 'category'
const renderName = `backend/page/${routerName}/`

const catchAsync = require('../utils/catchAsync')


const CategoryService = require('../services/category_service')

module.exports = {
    list : catchAsync( async (req , res , next) => {
        try {
            let items = await CategoryService.getAll()
            res.render(`${renderName}list` , {
                items
            })
            
        } catch (error) {
            next(error)
        }
    }),
    getForm : catchAsync (async (req , res , next) => { 
        console.log(__prefixAdmin)
        res.render(`${renderName}form` , {

        })
    }),
    saveItems : catchAsync ( async (req , res , next) => { 
        let items = await CategoryService.addItems({body : req.body})
        console.log(items)
        // res.redirect(`/${__prefixAdmin}/${routerName}`)
        res.redirect('back')
    })
}
