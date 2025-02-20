import { api } from './';

export const search = async (query: string) => {
  const response = await api.get(`/search`, { params: { q: query } });
  return response.data;
};
