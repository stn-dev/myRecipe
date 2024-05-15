import axios from "axios"
<<<<<<< HEAD
import { UserService } from "./userService";
import { redirect, useLocation } from "react-router-dom";
=======
>>>>>>> new-dynamisation

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

<<<<<<< HEAD
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
=======
axiosInstance.interceptors.request.use(
    async (req) => {
        const token = localStorage.getItem("token")
        if (token) {
            req.headers.Authorization = `Bearer ${token}`
        }
        return req
    },
    (err) => Promise.reject
)


axiosInstance.interceptors.response.use(
    (res) => res,
    async (error) => {
        try {
            const refresh = localStorage.getItem("refreshToken")
            const status = error?.response ? error.response.status : null

            if (status == 401 && refresh) {
                const token = axios.get("http://localhost:4400/api/refreshToken", {
                    headers: {
                        "Authorization": `Bearer ${refresh}`
                    }
                })
                const newToken = token.token
                localStorage.setItem("token", newToken)

                return axiosInstance(error.config)
            }

            if (status == 401) {
                // alert("user doesn't exist")
                return error.response
            }

            if (status == 500) {
                // alert(`${error.response.message}`)
                return error.response
            }

            return Promise.reject()

        } catch (error) {
            console.log(error.message)
        }
    }
)

export default axiosInstance;
>>>>>>> new-dynamisation
