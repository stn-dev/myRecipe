import axios from "axios"
import { UserService } from "./userService";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default axiosInstance;

axiosInstance.interceptors.request.use(
    (request) => {
        const token = request.data.token;
        const refreshToken = request.data.refreshToken;

        console.log(request.data)

        request.headers.Authorization = `Bearer ${token}`

        if (token) {
            localStorage.setItem("token", token)
        } if (refreshToken) {
            localStorage.setItem("refreshToken", refreshToken)
        }

        return request;
    },
    (eror) => {
        return Promise.reject("unable to make request")
    }
)

axiosInstance.interceptors.response.use(
    async (res) => {
        // const token = request.data.token;
        // const refreshToken = request.data.refreshToken;

        // console.log(token, refreshToken)

        // request.headers.Authorization = `Bearer ${token}`

        // if (token) {
        //     localStorage.setItem("token", token)
        // } if (refreshToken) {
        //     localStorage.setItem("refreshToken", refreshToken)
        // }
        return res
    },
    async error => {
        const status = error.response ? error.response.status : null;

        if (status == 401 &&
            localStorage.getItem("token")
        ) {
            const refresh = await UserService.getRefreshToken(localStorage.getItem("refreshToken"))

            response.headers.Authorization = `Bearer ${refresh}`
            return null;
        }

        return Promise.resolve("request rejected")
    }
)



