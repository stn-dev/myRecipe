import { Http } from "./http";

export class ImageService extends Http {
    static async creatavatar() {
        try {
            const res = await this.post("image")
            return res;

        } catch (error) {
            console.error(error.message)
        }
    }
}