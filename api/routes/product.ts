import express from 'express'
import { asyncErrorhandling } from '../middleware/async'
import { productController } from '../controller/product'

const router = express.Router()

router.post('/create', asyncErrorhandling(productController.createProduct))
router.put('/update', asyncErrorhandling(productController.updateProduct))
router.get('/:id', asyncErrorhandling(productController.getOneProduct))
router.get('/', asyncErrorhandling(productController.getAllProduct))
export default router