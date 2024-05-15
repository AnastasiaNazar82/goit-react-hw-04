import axios from "axios";

axios.defaults.baseURL = "<https://hn.algolia.com/api/v1>";

export const getArticles = async (topic, totalPage) => {
  const response = await axios.get("/search", {
    params: {
      query: topic,
      page: totalPage,
      hitsPrePage: 20,
    },
  });

  return response.data.hits;
};
