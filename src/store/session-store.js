import { create } from "zustand";

export const useSession = create((set)=> {
    return {
        // user:null,
        user: JSON.parse(localStorage.getItem('user')) || null,
        isAuth: Boolean(localStorage.getItem('token')),

        setSession: (response)=>{
            localStorage.setItem('token',response.token)
            // set({user: response.data,isAuth: true})
            localStorage.setItem('user', JSON.stringify(response.data));
        },

        clear: ()=> {
            set({user: null,isAuth: false})
            localStorage.removeItem('token')
            localStorage.removeItem('user');
        }
    }
})
