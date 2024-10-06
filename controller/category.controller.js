import Category from "../model/categoryModel.js"

const categoryController = {
    getCategory: async (req,res)=>{
        try {
            const categories = await Category.find()
            res.json(categories)
        } catch (error) {
            res.status(500).json({err: error.messsage})
        }
       
    },
    createCategory:async (req,res)=>{
       try {
        // get category by name
        const {name} = req.body
        // find by name
        const category = await Category.findOne({name})
        
        if(category) return res.status(400).json({message: "category already exist"})
       
        const newCategory = new Category({name})
        
        await newCategory.save()

        res.json({messsage: "category is created"})

       } catch (error) {
        res.status(500).json({err: error.message})
       }
    }
}

export default categoryController