import axios from "axios";
import { getServer } from "utils/help";

const server = getServer();

const api = axios.create({
  baseURL: server,
});

export const getDeckService = async (deckID) => {
  const response = await api.get(`deck/${deckID}/cards`);
  return response.data;
};

export default api;
