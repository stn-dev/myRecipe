import { Http } from "./http";

export class ImageService extends Http {
    static async createAvatar(data) {
        try {
            const res = await this.post("image", data)
            return res;
        } catch (error) {
            console.error(error.message)
        }
    }
}
