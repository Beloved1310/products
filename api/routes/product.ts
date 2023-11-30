import express from 'express'
import { asyncErrorhandling } from '../middleware/async'
import { productController } from '../controller/product'

const router = express.Router()

router.post('/create', asyncErrorhandling(productController.createProduct))
router.put('/update', asyncErrorhandling(productController.updateProduct))
router.get('/:id', asyncErrorhandling(productController.viewProduct))
router.get('/', asyncErrorhandling(productController.listProducts))
export default router