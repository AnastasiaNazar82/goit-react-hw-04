import axios from "axios";

const API_KEY = "zl5ajlft1JNrwRwTaer6p9rRFP015oGnGRWIZxEASeA";

axios.defaults.baseURL = "https://api.unsplash.com";
axios.defaults.headers.common["Authorization"] = API_KEY;

export const getArticles = async (topic, page) => {
  const response = await axios.get("/search/photos?query=${topic}", {
    params: {
      query: topic,
      page: page,
      pre_page: 12,
    },
  });

  return response.data;
};
