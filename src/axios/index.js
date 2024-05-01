import axios from "axios";

const instance = axios.create({
  baseURL: "https://sanchitbhadgaldev.netlify.app/api/",
});

export default instance;
