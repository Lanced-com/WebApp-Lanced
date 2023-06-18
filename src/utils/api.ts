import Axios from 'axios'

const BACKEND_HOST = 'http://localhost:8080'

class Api {
    static async getCustomers() {
        return await Axios.get(`${BACKEND_HOST}/customers`)
    }

    static async getUsers() {
        return await Axios.get(`${BACKEND_HOST}/users`)
    }
}

export default Api