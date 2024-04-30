import axios from "axios"

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

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
        const refresh = localStorage.getItem("refreshToken")
        const status = error.response.status

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
            alert("user doesn't exist")
        }

        if (status == 500) {
            alert(`${error.response.message}`)
        }

        return Promise.resolve
    }
)

export default axiosInstance;