import { classicApi } from "../api/axios";

class CategoriesService {
    async get() {
        const { data } = await classicApi.get(`/categories`);
        return data?.map((item) => ({
            label: item.name,
            value: item.id
        })) || [];
    }
}

export const categoriesService = new CategoriesService();