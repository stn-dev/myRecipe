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
    static async getAllUsers() {
        try {
            const res = await this.get("user")
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
    static async deleteUser(id) {
        try {
            const res = await this.delete(`user/${id}`)
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }
    static async createAvatar(data) {
        try {
            const res = await this.post(`image`, data)
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }
}