import { instance } from './instance';

export const requestCampers = async formData => {
  const { data } = await instance.get('/advert', formData);
  return data;
};
