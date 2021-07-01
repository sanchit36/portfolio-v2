import axios from "axios";

const instance = axios.create({
  baseURL: "https://portfolio-sanchit.herokuapp.com/api/",
});

export default instance;
