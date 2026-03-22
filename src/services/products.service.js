import { classicApi } from "../api/axios";


class ProductService {
     async get(params) {
        const {data} = await classicApi.get(`/products`,{
            params
        })

        return data
    }
        async getById(id) {
        const { data } = await classicApi.get(`/products/${id}`);
        return data;
    }
}

export const productService = new ProductService()