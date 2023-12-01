import Product from '../model/product'

export const productRepository = {
  async getOneProduct(item: {}) {
    const foundProduct= await Product.findOne(item).select('-__v')
    return foundProduct
  },
  async createProduct(createProduct: {}) {
    const product= await Product.create(createProduct)
    return product
  },

  async updateProduct(code: string, updateFields: {}) {
    const product= await Product.updateOne(
      { code },
      {
        $set: {
          ...updateFields,
        },
      },
    )
    return product
  },

  async deleteProduct(code: string) {
    const product= await Product.deleteOne({ code })
    return product
  },

  async listProducts(queryParams: any) {
    const perPage = 10
    const page = parseInt(queryParams.page as string) || 1
    const skip = (page - 1) * perPage

    const [product, total] = await Promise.all([
      Product.find(queryParams)
        .skip(skip)
        .limit(perPage)
        .select('-_id -__v')
        .exec(),
      Product.countDocuments(queryParams).exec(),
    ])
    const meta = {
      total,
      page,
      perPage,
      hasMore: total > page * perPage,
      nextPage: total > page * perPage ? page + 1 : null,
    }

    return { product, meta }
  },
}