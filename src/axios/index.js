import axios from "axios";

const instance = axios.create({
  baseURL: "https://sanchitbhadgaldev.vercel.app/api/",
});

export default instance;
