import { instance } from './instance';

export const requestCampers = async requestData => {
  const res = await instance.get('/advert', { params: requestData });
  return res.data;
};
