import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VERCEL_URL
    ? `${process.env.VERCEL_URL}/api/`
    : "http://127.0.0.1:3000/api",
});

export default instance;
