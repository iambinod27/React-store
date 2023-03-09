import axios from "axios";

const StoreAxios = axios.create({
  baseURL: "https://fakestoreapi.com",
  headers: {
    Accept: "application/json",
  },
});

export default StoreAxios;
