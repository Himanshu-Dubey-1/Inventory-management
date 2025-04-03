import axios from "axios";


const axiosInstance = axios.create({
    baseURL: "https://inventory-management-scn8.onrender.com/api",
    withCredentials: true,
})

export default axiosInstance;