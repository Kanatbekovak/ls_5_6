import { useNavigate } from "react-router-dom"
import { authService } from "../services/auth.service"
import { useMutation } from "@tanstack/react-query"
import { useSession } from "./session-store"


export const useAuthStore = () => {
    const navigate = useNavigate()
    const setSession = useSession(state => state.setSession)

    const registerMutation = useMutation({
        mutationFn: authService.register,
        onSuccess() {
            navigate('/login')
        }
    })

    const loginMutation = useMutation({
        mutationFn: authService.login,
        onSuccess(responce){
            navigate('/profile')
            setSession(responce)
        }
    })
    return {
        register: registerMutation.mutate,
        registerPending: registerMutation.isPending,

        
        login: loginMutation.mutate,
        loginPending: loginMutation.isPending
    }
}