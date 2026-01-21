import { handleServerResponse } from "./api.js";
import { apiKey } from "./constants.js";

export const getNews = ({ q, from, to, pageSize }) => {
    return fetch(`https://newsapi.org/v2/everything?q=${(q)}&from=${from}&to=${to}&pageSize=${pageSize}&apiKey=${apiKey}`).then(handleServerResponse);
};

