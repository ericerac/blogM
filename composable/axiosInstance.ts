import axios from "axios";


export const instance = axios.create({
     baseURL: "http://49.13.3.226/",
     //baseURL: "http://localhost:3000/",
  });

