import axios from "axios";
import axiosInstance from "./axios";


export default class Http {
    static async get(url) {
        try {
            const res = await axiosInstance.get(url)
            return res
        } catch (error) {
            console.error(error.message);
        }
    }


    static async post(url, data) {
        try {
            const res = await axiosInstance.post(url, data);
            return res;
        } catch (error) {
            throw new Error(error.message);
        }
    }


    static async patch(url, data) {
        try {
            const res = await axiosInstance.patch(url, data);
            return res
        } catch (error) {
            console.error(error.message);
        }
    }


    static async delete(url, data) {
        try {
            const res = await axiosInstance.delete(url, data);
            return res
        } catch (error) {
            console.error(error.message);
        }
    }

    static async put(url, data) {
        try {
            const res = await axiosInstance.put(url, data);
            return res
        } catch (error) {
            console.error(error.message);
        }
    }
}