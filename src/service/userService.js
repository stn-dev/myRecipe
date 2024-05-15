import { Http } from "./http";

<<<<<<< HEAD

=======
>>>>>>> new-dynamisation
export class UserService extends Http {
    static async createUser(data) {
        try {
            const res = await this.post("user", data)
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }
<<<<<<< HEAD
    static async updateUser(data) {
        try {
            const res = await this.put("user", data)
            return res.data;
=======
    static async loginUser(data) {
        try {
            const res = await this.post("user/login", data)
            return res;
>>>>>>> new-dynamisation
        } catch (error) {
            console.log(error.message);
        }
    }
<<<<<<< HEAD
    static async getUser() {
=======
    static async getAllUsers() {
>>>>>>> new-dynamisation
        try {
            const res = await this.get("user")
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }
<<<<<<< HEAD
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
=======
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
>>>>>>> new-dynamisation
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }
}