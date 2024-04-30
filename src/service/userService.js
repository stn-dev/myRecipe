import { Http } from "./http";

export class UserService extends Http {
    static async createUser(data) {
        try {
            const res = await this.post("user", data)
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
            console.log(error.message);
        }
    }
    static async getAllUsers(data) {
        try {
            const res = await this.get(data)
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async editUser(data) {
        try {
            const res = await this.put("user", data)
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async deleteUser(id, data) {
        try {
            const res = await this.delete(`user/${id}`, data)
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }
}