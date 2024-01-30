import axios from 'axios';
import { API_CATS_KEY } from '@shared/lib/config';

export const getCats = async (page: number) => {
  const res = await axios.get(` https://api.thecatapi.com/v1/images/search?limit=15&page=${page}&api_key=${API_CATS_KEY}`);
  return res;
};