import { productRepository } from '../repositories/products'
import { ProductInput } from '../interfaces/product'
import ExistsError from '../utilis/exists-error'
import NotFoundError from '../utilis/not-found-error'

export const productService = {
  async createProduct(payload: ProductInput) {
    const Product= await productRepository.getOneProduct({ name: payload.name })
    if (Product) throw new ExistsError('Product')
    const createProduct= await productRepository.createProduct(payload)
    return createProduct
  },

  async updateProduct(code: string, updateFields: {}) {
    const Product= await productRepository.getOneProduct({ code })
    if (!Product) throw new NotFoundError('Product')
    const createProduct= await productRepository.updateProduct(code, updateFields)
    return createProduct
  },

  async deleteProduct(code: string) {
    const Product= await productRepository.getOneProduct({ code })
    if (!Product) throw new NotFoundError('Product')
    const deleteProduct= await productRepository.deleteProduct(code)
    return deleteProduct
  },

  async getProduct(code: string) {
    const Product= await productRepository.getOneProduct({ code })
    if (!Product) throw new NotFoundError('Product')
    return Product
  },

  async listProducts(queryParams : any) {
    if (typeof queryParams.name === 'string') {
      queryParams.name = { $regex: queryParams.name, $options: 'i' }
    }

    if (typeof queryParams.price === 'string') {
      queryParams.founded = parseInt(queryParams.founded)
    }

    if (typeof queryParams.quantity === 'string') {
        queryParams.founded = parseInt(queryParams.quantity)
      }

    const listProducts = await productRepository.listProducts(queryParams)
    return listProducts
  },
}