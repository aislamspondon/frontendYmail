import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://3.115.193.230:8080/",
});

export default axiosInstance;
