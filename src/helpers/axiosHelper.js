import axios from "axios";

const axiosHelper = () => {
    const defaultOptions = {
        baseURL: process.env.VUE_APP_API_URL,
        headers: {
            'Content-Type': 'application/json',
        },
    };

    let instance = axios.create(defaultOptions);

    instance.interceptors.request.use(function (config) {
        const token = localStorage.getItem('token');
        config.headers.Authorization = token ? `Bearer ${token}` : '';
        return config;
    });

    return instance
}

export default axiosHelper
