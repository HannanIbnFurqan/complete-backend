import express from "express";
import categoryController from "../controller/category.controller.js";
import auth from "../middleware/auth.js";
import authAdmin from "../middleware/authAdmin.js";

const router = express.Router();

// Route to get all categories and create a new one
router.route('/category')
  .get(categoryController.getCategory)
  .post(auth, authAdmin, categoryController.createCategory);

// Route to delete a category by ID
router.route('/category/:id')
  .delete(auth, authAdmin, categoryController.deleteCategory)
  .put(auth,authAdmin,categoryController.updateCategory)

export default router;
