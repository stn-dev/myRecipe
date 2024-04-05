import Http from "./http";


export class CousrseService extends Http {
    static async getCourse() {
        try {
            const res = await this.get("course")
            return res;

        } catch (error) {
            console.error(error.message)
        }
    }

    static async postCourse(data) {
        try {
            const res = await this.post("course", data)
            return res;

        } catch (error) {
            console.error(error.message)
        }
    }
}