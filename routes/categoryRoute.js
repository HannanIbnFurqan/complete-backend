import express from "express";
import categoryController from "../controller/category.controller.js";
import auth from "../middleware/auth.js";
import authAdmin from "../middleware/authAdmin.js";
const router = express.Router()

router.route('/category')
.get(categoryController.getCategory)
.post(auth, authAdmin, categoryController.createCategory)

export default router