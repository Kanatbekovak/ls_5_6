import axios from 'axios'

const creatApi =() => axios.create({
    baseURL: 'https://59d7ac916afc684b.mokky.dev',
    headers: {
        'Content-Type': 'application/json'
    }
})

const classicApi = creatApi()

export {classicApi}