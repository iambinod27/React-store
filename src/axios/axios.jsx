import axios from "axios";

const StoreAxios = axios.create({
  baseURL: "https://3e8e-103-10-31-107.in.ngrok.io/",
  headers: {
    Accept: "application/json",
  },
});

export default StoreAxios;
