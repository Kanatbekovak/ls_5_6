// import { create } from "zustand";
// import { classicApi } from "../api/axios.js";
import { useQuery } from "@tanstack/react-query";
import { productService } from "../services/products.service.js";


export const useProductsStore =(params)=> {
    const {data,isPending,error} = useQuery({
        queryKey: ['products',params],
        queryFn: () => productService.get(params)
    })

    return {
        data,
        isPending,
        error
    }
}
// export const useProductsStore = create((set,get) => ({
//     data:[],
//     loading: false,
//     oneProduct: null,

//     loadData: async(search='',categoryId = undefined) => {
//         set({loading: true})

//         const {data} =await classicApi.get(`/products/`,{
//                 params: {
//                     name: `*${search}`,
//                     categorie_id: categoryId,
//                 }
//             })
//             set({data,loading:false})
//     },

//     loadDataOneProduct: async (id)=>{
//         set({loading: true,oneProduct: null})
        
//         const {data} = await classicApi.get(`/products/${id}`)
//         // const products = await JSON.parse(data)
//         set({oneProduct:data, loading: false})
//     }
// }))