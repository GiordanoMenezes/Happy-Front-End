import Axios from "axios";

const api = Axios.create({
  baseURL: "http://localhost:5000",
});

export default api;