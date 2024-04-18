// import { Http, Test } from "./http"

class Http {
    static async get(url) {
        try {
            const res = await axiosInstance.get(url)
            return res
        } catch (error) {
            console.log(error.message);
        }
    }


    static async post(url, data) {
        try {
            const res = await axiosInstance.post(url, data);
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }


    static async patch(url, data) {
        try {
            const res = await axiosInstance.patch(url, data);
            return res
        } catch (error) {
            console.log(error.message);
        }
    }


    static async delete(url, data) {
        try {
            const res = await axiosInstance.delete(url, data);
            return res
        } catch (error) {
            console.log(error.message);
        }
    }

    static async put(url, data) {
        try {
            const res = await axiosInstance.put(url, data);
            return res
        } catch (error) {
            console.log(error.message);
        }
    }
}

export class UserService extends Http {
    static async createUser(data) {
        try {
            const res = await this.post("user", data)
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async updateUser(data) {
        try {
            const res = await this.put("user", data)
            return res.data;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async getUser() {
        try {
            const res = await this.get("user")
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async loginUser(data) {
        try {
            const res = await this.post("user/login", data)
            return res;
        } catch (error) {
            console.log(error.message)
        }
    }

    static async getRefreshToken() {
        try {
            const res = await this.get("refreshToken")
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }
}