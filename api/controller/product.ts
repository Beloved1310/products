import { Request, Response } from 'express'
import { productValidation } from '../validation/product'
import { productService } from '../services/product'
import { ResponseService } from '../services/response'
import { ProductInput } from '../interfaces/product'

export const productController = {
  async createProduct(req: Request, res: Response): Promise<{}> {
    const { value, error } = productValidation.create.validate(req.body)
    if (error) return res.status(400).send({ error: error.details[0].message })
    const data: ProductInput = await productService.createProduct(value)
    return ResponseService.success(res, 'Product Successfully Created', data)
  },

  async updateProduct(req: Request, res: Response): Promise<{}> {
    const { value, error } = productValidation.update.validate(req.body)
    if (error) return res.status(400).send({ error: error.details[0].message })
    const { code } = req.params
    await productService.updateProduct(code, value)
    return ResponseService.success(res, 'Product Successfully Updated')
  },

  async deleteProduct(req: Request, res: Response): Promise<{}> {
    const { code } = req.params
    await productService.deleteProduct(code)
    return ResponseService.success(res, 'Product Successfully Deleted')
  },

  async viewProduct(req: Request, res: Response): Promise<{}> {
    const { code } = req.params
    const Product = await ProductService.getProduct(code)
    const { _id, ...data } = Product.toObject()
    return ResponseService.success(res, 'Product Successfully Retrieved', data)
  },

  async listProducts(req: Request, res: Response): Promise<{}> {
    const queryParams = {
      ...req.query,
    }
    const data = await productService.listProducts(queryParams)

    return ResponseService.success(res, 'Products Successfully Retrieved', data)
  },
}
