import axios from "axios"
import { UserService } from "./userService";
import { redirect, useLocation } from "react-router-dom";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default axiosInstance;

axiosInstance.interceptors.request.use((req) => {
    const isToken = localStorage.getItem("token")
    if (isToken) {
        req.config.headers.Authorization = `Bearer ${isToken}`;
        req.headers.Authorization = `Bearer ${isToken}`;
    }
    return req;
},
    (err) => {
        return Promise.reject
    }
)

axiosInstance.interceptors.response.use((res) => res
    ,
    async (err) => {
        const isToken = localStorage.getItem("token")
        const status = err.response ? err.response.status : null;

        if (status == 401 && isToken) {
            try {
                // const res = await UserService.getRefreshToken()

                // if (res) {
                //     localStorage.setItem("token", res)
                // }

                // return axiosInstance(err.config)

            } catch (error) {
                console.error(error.message)
            }
        }
    }
)
