import axios from "axios";

const StoreAxios = axios.create({
  baseURL: "https://course-api.com/",
  headers: {
    Accept: "application/json",
  },
});

export default StoreAxios;
