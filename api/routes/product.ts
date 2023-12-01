import express from 'express'
import { asyncErrorhandling } from '../middleware/async'
import { productController } from '../controller/product'
import {auth} from '../middleware/auth'

const router = express.Router()

router.post('/create', auth, asyncErrorhandling(productController.createProduct))
router.put('/update/:id',auth,  asyncErrorhandling(productController.updateProduct))
router.get('/:id', auth, asyncErrorhandling(productController.viewProduct))
router.get('/',auth, asyncErrorhandling(productController.listProducts))
router.delete('/:id',auth, asyncErrorhandling(productController.deleteProduct))

export default router