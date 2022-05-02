import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "0b4bb693eemsh7b4a3636f25dfccp179ca5jsn694a3f010c8d",
    },
  });

  return data;
};
