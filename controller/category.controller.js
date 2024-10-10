import Category from "../model/categoryModel.js";

const categoryController = {
    // Get all categories
    getCategory: async (req, res) => {
        try {
            const categories = await Category.find();
            res.json(categories);
        } catch (error) {
            res.status(500).json({ err: error.message }); // Corrected error handling
        }
    },
    
    // Create a new category
    createCategory: async (req, res) => {
        try {
            const { name } = req.body;

            // Check if category already exists by name
            const category = await Category.findOne({ name });
            if (category) return res.status(400).json({ message: "Category already exists" });

            // Create a new category
            const newCategory = new Category({ name });
            await newCategory.save();

            res.json({ message: "Category created successfully" });
        } catch (error) {
            res.status(500).json({ err: error.message }); // Corrected error handling
        }
    },

    // Delete a category by ID
    deleteCategory: async (req, res) => {
        try {
            const { id } = req.params;

            // Find and delete the category by ID
            const deletedCategory = await Category.findByIdAndDelete(id);
            if (!deletedCategory) return res.status(400).json({ message: "Category not found" });

            res.json({ message: "Category deleted successfully" });
        } catch (error) {
            res.status(500).json({ err: error.message });
        }
    },

    updateCategory: async (req,res)=>{
       try {
        const {name} = req.body
        await Category.findByIdAndUpdate({_id: req.params.id},{name})
        res.json({message: "update success"})
       } catch (error) {
        res.json({err: err.message})
       }
    }
};

export default categoryController;
