import axios from 'axios';
import { BusRecord } from './types';

const BASE_URL = 'https://srisrinivasalogistics.onrender.com';

export const fetchBuses = async (): Promise<BusRecord[]> => {
  const response = await axios.get<BusRecord[]>(`${BASE_URL}/buses`);
  return response.data;
};
