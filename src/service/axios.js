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
        req.config.headers.Authorization = `Bearer ${isToken}`
    }
    return req;

},
    (err) => {
        return Promise.reject
    }
)

axiosInstance.interceptors.response.use((res) => res
    // const { pathname } = useLocation();

    // console.log(pathname)

    // const token = res.data.token;
    // const refresh = res.data.refreshToken;
    // const id = res.data.user._id;


    // if (token) {
    //     localStorage.setItem("token", token)
    // }
    // if (refresh) {
    //     localStorage.setItem("refreshToken", refresh)
    // }
    // if (id) {
    //     localStorage.setItem("id", id)
    // }

    // console.log(token)


    ,
    async (err) => {
        const isToken = localStorage.getItem("token")
        const status = err.response ? err.response.status : null;

        if (status == 401 && isToken) {
            try {

                const res = await UserService.getRefreshToken()

                const newToken = res.token;

                console.log(newToken
                )

                const token = localStorage.setItem("token", newToken)

            } catch (error) {
                console.error(error.message)
            }
        }
    }
)


// axiosInstance.interceptors.response.use(
//     (res) => {
//         const token = res.data.token;
//         const refresh = res.data.refreshToken;
//         const id = res.data.user._id;

//         if (token) {
//             toLogin.config.headers.Authorization = `Bearer ${token}`
//             localStorage.setItem("token", token)
//         }
//         if (refreshToken) {
//             localStorage.setItem("refreshToken", refreshToken)
//         }
//         if (id) {
//             localStorage.setItem("id", id)
//         }

//         return res
//     },
//     (err) => {
//         const isToken = localStorage.getItem("token")
//         const status = err.response ? err.response.status : null;

//         if (status == 401 && isToken) {
//             try {
//                 const toRefresh = async () => {
//                     const res = await UserService.getRefreshToken()

//                     console.log(res)
//                 }
//             } catch (error) {
//                 console.error(error.message)
//             }
//         }
//     }
// )



