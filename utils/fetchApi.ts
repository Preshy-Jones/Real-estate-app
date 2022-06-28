import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

interface Headers {
  "X-RapidAPI-Host": string;
  "X-RapidAPI-Key": string | undefined;
}

const headers: Headers = {
  "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY,
};

export const fetchApi = async (url: string) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": `${process.env.NEXT_PUBLIC_RAPID_API_KEY}`,
    },
  });

  return data;
};
