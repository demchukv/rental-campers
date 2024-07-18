import { instance } from './instance';

export const requestCampers = async () => {
  const { data } = await instance.get('/advert');
  return data;
};
