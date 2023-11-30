import express from 'express'
import { asyncErrorhandling } from '../middleware/async'
import { productController } from '../controller/product'

const router = express.Router()

router.post('/create', asyncErrorhandling(productController.createProduct))
router.put('/update/:id', asyncErrorhandling(productController.updateProduct))
router.get('/:id', asyncErrorhandling(productController.viewProduct))
router.get('/', asyncErrorhandling(productController.listProducts))
router.delete('/delete', asyncErrorhandling(productController.deleteProduct))

export default router