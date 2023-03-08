import { instance } from './core/axios';

export const payment = async (data) => {
  return instance
    .post('/ap/v1/partners/demoreport/GetDemoData', data)
    .then((response) => {
      response = response.data.Payment;
      console.log(response);
      return response;
    })
    .catch((error) => {
      throw error;
    });
};
