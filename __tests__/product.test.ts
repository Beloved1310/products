import { productService } from '../api/services/product';
import { productRepository } from '../api/repositories/products';
import ExistsError from '../api/utilis/exists-error';
import NotFoundError from '../api/utilis/not-found-error';
import { ProductInput} from '../api/interfaces/product'




jest.mock('../api/repositories/products');

describe('Product Service', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should create a product', async () => {
    const payload : ProductInput = {
      name: 'Test Product',
      price: 20.0,
      quantity: 50,
    };

    const createProductMock = jest.spyOn(productRepository, 'createProduct');
    // createProductMock.mockResolvedValueOnce(payload);

    const result = await productService.createProduct(payload);

    expect(createProductMock).toHaveBeenCalledWith(payload);
    expect(result).toEqual(payload);
  });

  it('should update a product', async () => {
    const code = '123';
    const updateFields = {
      name: 'Updated Product',
    };

    const getOneProductMock = jest.spyOn(productRepository, 'getOneProduct');
    getOneProductMock.mockResolvedValueOnce({ code, name: 'Old Product' });

    const updateProductMock = jest.spyOn(productRepository, 'updateProduct');
    // updateProductMock.mockResolvedValueOnce({ code, ...updateFields });

    const result = await productService.updateProduct(code, updateFields);

    expect(getOneProductMock).toHaveBeenCalledWith({ code });
    expect(updateProductMock).toHaveBeenCalledWith(code, updateFields);
    expect(result).toEqual({ code, ...updateFields });
  });

  it('should delete a product', async () => {
    const code = '123';

    const getOneProductMock = jest.spyOn(productRepository, 'getOneProduct');
    getOneProductMock.mockResolvedValueOnce({ code, name: 'Product to Delete' });

    const deleteProductMock = jest.spyOn(productRepository, 'deleteProduct');
    deleteProductMock.mockResolvedValueOnce({ code });

    await expect(productService.deleteProduct(code)).resolves.toEqual({ code });

    expect(getOneProductMock).toHaveBeenCalledWith({ code });
    expect(deleteProductMock).toHaveBeenCalledWith(code);
  });

  it('should get a product', async () => {
    const code = '123';

    const getOneProductMock = jest.spyOn(productRepository, 'getOneProduct');
    getOneProductMock.mockResolvedValueOnce({ code, name: 'Test Product' });

    const result = await productService.getProduct(code);

    expect(getOneProductMock).toHaveBeenCalledWith({ code });
    expect(result).toEqual({ code, name: 'Test Product' });
  });

  it('should list products', async () => {
    const queryParams = { name: 'Test', price: '20.0', quantity: '50' };

    const listProductsMock = jest.spyOn(productRepository, 'listProducts');
    listProductsMock.mockResolvedValueOnce({
      product: [{ code: '123', name: 'Test Product' }],
      meta: { total: 1, page: 1, perPage: 10, hasMore: false, nextPage: null },
    });

    const result = await productService.listProducts(queryParams);

    expect(listProductsMock).toHaveBeenCalledWith(queryParams);
    expect(result).toEqual({
      product: [{ code: '123', name: 'Test Product' }],
      meta: { total: 1, page: 1, perPage: 10, hasMore: false, nextPage: null },
    });
  });
});

// Add similar tests for the productController if needed.
