import axios from "axios";
const API = axios.create({
  baseURL: "https://skprecastbackend.onrender.com/api", // Your Render backend URL
});
export default API;
