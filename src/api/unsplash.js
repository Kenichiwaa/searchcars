import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID pi25TFsc8Kznfg2rMd3Pi3TY8foRJDYCMdrel_AUNDk"
  }
});

