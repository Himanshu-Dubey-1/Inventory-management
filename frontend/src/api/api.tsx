import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "http://Localhost:5000",
    withCredentials: true,
})

export default axiosInstance;