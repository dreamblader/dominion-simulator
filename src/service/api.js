import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
});

export const getDeckService = async (deckID) => {
  const response = await api.get(`deck/${deckID}/cards`);
  return response.data;
};

export default api;
