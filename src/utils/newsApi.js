import { handleServerResponse } from "./api.js";
import { apiKey } from "./constants.js";

export const getNews = ({ q, from, to, pageSize }) => {
  // In production, use Netlify function; in development, call NewsAPI directly
  const isDev = process.env.NODE_ENV !== "production";
  
  const url = isDev
    ? `https://newsapi.org/v2/everything?q=${q}&from=${from}&to=${to}&pageSize=${pageSize}&apiKey=${apiKey}`
    : `/.netlify/functions/news-proxy?q=${q}&from=${from}&to=${to}&pageSize=${pageSize}`;

  return fetch(url).then(handleServerResponse);
};
