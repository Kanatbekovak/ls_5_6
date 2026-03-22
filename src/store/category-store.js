// import { create } from "zustand";
// import { classicApi } from "../api/axios";
import { useQuery } from "@tanstack/react-query";
import { categoriesService } from "../services/products.categories";

export const useCategory = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => categoriesService.get(),
    });
};
// export const useCategory = create((set) => ({
//     data:[],

//     loadCategories: async()=> {
//         const {data} = await classicApi.get('/categories')

//         const categories = data?.map((item) => {
//             return {
//                 label: item.name,
//                 value: item.id
//             }
//         })
//         set({data:categories})
//     }
// }))