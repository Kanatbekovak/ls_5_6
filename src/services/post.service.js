import axios from "axios"


const BASE_URL = 'https://2ae61cde2e21f8bf.mokky.dev'

class PostService {
    async get() {
        const {data} = await axios.get(`${BASE_URL}/posts`)
        return data
    }

    async create(newPost) {
        await axios.post(`${BASE_URL}/posts`,newPost)
    }

    async delete(id) {
        await axios.delete(`${BASE_URL}/posts/${id}`)
    }
}

export const postService = new PostService()