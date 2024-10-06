import express from "express";
import categoryController from "../controller/category.controller.js";
const router = express.Router()

router.route('/category')
.get(categoryController.getCategory)

export default router