import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    accept: "application/json",
    access_token: JSON.parse(localStorage.getItem("adminCredential")),
  },
});
