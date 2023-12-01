/// <reference path="../startup/db.d.ts" />
/// <reference types="mongoose" />
export declare const productRepository: {
    getOneProduct(item: {}): Promise<any>;
    createProduct(createProduct: {}): Promise<import("mongoose").Document<any, any, any>>;
    updateProduct(code: string, updateFields: {}): Promise<import("mongoose").Model<import("mongoose").Document<any, any, any>, any, any>>;
    deleteProduct(code: string): Promise<any>;
    listProducts(queryParams: any): Promise<{
        product: any;
        meta: {
            total: any;
            page: number;
            perPage: number;
            hasMore: boolean;
            nextPage: number | null;
        };
    }>;
};
