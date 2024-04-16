import { Http } from "/src/service/http.js?t=1713265995646";


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