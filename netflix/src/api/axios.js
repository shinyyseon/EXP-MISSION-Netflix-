import axios from "axios";

const instance = axios.create ({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "04767b88e4b597d419702c6ad4350b65",
    language: "ko-KR",
  },
});

export default instance;