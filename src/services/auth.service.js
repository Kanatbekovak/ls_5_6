import { classicApi } from "../api/axios";


class AuthService{
    async register(registerData) {
        await classicApi.post('/register',registerData)
       
    }

    async login(loginData) {
        const {data } = await classicApi.post('/auth',loginData)
        return data
    }
}

export const authService = new AuthService()