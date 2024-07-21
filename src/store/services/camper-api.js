import { instance } from './instance';

export const requestCampers = async requestData => {
  const res = await instance.get('/campers', { params: requestData });
  return res.data;
};
