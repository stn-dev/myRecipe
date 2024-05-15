<<<<<<< HEAD

import axiosInstance from "./axios";

class Http {
=======
import axiosInstance from "./axios";

export class Http {
>>>>>>> new-dynamisation
    static async get(url) {
        try {
            const res = await axiosInstance.get(url)
            return res
        } catch (error) {
            console.log(error.message);
        }
    }
<<<<<<< HEAD


    static async post(url, data) {
        try {
            const res = await axiosInstance.post(url, data);
            return res;
=======
    static async post(url, data) {
        try {
            const res = await axiosInstance.post(url, data);
            return res
>>>>>>> new-dynamisation
        } catch (error) {
            console.log(error.message);
        }
    }
<<<<<<< HEAD


    static async patch(url, data) {
        try {
            const res = await axiosInstance.patch(url, data);
=======
    static async put(url, data) {
        try {
            const res = await axiosInstance.put(url, data);
>>>>>>> new-dynamisation
            return res
        } catch (error) {
            console.log(error.message);
        }
    }
<<<<<<< HEAD


=======
>>>>>>> new-dynamisation
    static async delete(url, data) {
        try {
            const res = await axiosInstance.delete(url, data);
            return res
        } catch (error) {
            console.log(error.message);
        }
    }
<<<<<<< HEAD

    static async put(url, data) {
        try {
            const res = await axiosInstance.put(url, data);
            return res
        } catch (error) {
            console.log(error.message);
        }
    }
}


export { Http }
=======
}
>>>>>>> new-dynamisation
