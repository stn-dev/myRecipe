import { Http } from "./http.js";

export class CourseService extends Http {
    static async getCourse() {
        try {
            const res = await this.get("course")
            return res;

        } catch (error) {
<<<<<<< HEAD
            console.error(error.message)
=======
            console.log(error.message)
>>>>>>> new-dynamisation
        }
    }

    static async postCourse(data) {
        try {
            const res = await this.post("course", data)
            return res;
        } catch (error) {
            console.log(error.message);
        }
    }
<<<<<<< HEAD
=======

>>>>>>> new-dynamisation
}