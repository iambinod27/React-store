import axios from "axios";
import { setHttpOnlyCookies } from "../utils/setHttpOnlyCookies";

const StoreAxios = axios.create({
  baseURL: "https://3e8e-103-10-31-107.in.ngrok.io/",
  headers: {
    Accept: "application/json",
  },
});

StoreAxios.interceptors.response.use(
  (response) => {
    if (response.data.access && response.data.refresh) {
      setHttpOnlyCookies(res.data.access_token, res.data.refresh_token);
    }

    return response;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default StoreAxios;
