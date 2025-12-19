import api from './api';

export const getCurrentAdmin = async () => {
  try {
    const { data } = await api.get('/auth/me');
    return data;
  } catch (error) {
    throw error;
  }
};