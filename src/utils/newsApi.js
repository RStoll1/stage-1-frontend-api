import { handleServerResponse, baseUrl } from "./api.js";

export const getNews = ({ q, from, to, pageSize }) => {
  return fetch(
    `${baseUrl}?q=${q}&from=${from}&to=${to}&pageSize=${pageSize}`
  ).then(handleServerResponse);
};
