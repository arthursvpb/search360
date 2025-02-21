import { api } from './';

export const getHistory = async () => {
  const response = await api.get('/history');
  return response.data;
};
