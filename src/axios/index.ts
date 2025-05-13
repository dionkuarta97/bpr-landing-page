import axios from "axios";
//https://api.bprsagodharma.com/api/public
//http://localhost:8000/api/public
const api = axios.create({
  baseURL: "http://localhost:8000/api/public",
});

export default api;
