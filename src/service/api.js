import axios from "axios";

const { protocol, hostname, port } = window.location;
const server = `${protocol}//${hostname}:${port}`;

const api = axios.create({
  baseURL: server,
});

export const getDeckService = async (deckID) => {
  const response = await api.get(`deck/${deckID}/cards`);
  return response.data;
};

export default api;
