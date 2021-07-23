/* eslint-disable new-cap */
/* eslint-disable require-jsdoc */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import API_ENDPOINT from '../globals/api-endpoint';
// import CONFIG from '../global/config';

class RestaurantDbSource {
  static async getAllVaresto() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    // console.log(responseJson);
    return responseJson.restaurants;
  }

  static async getDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    // console.log(responseJson.restaurant);
    return responseJson.restaurant;
  }

  static async kirimRiview(id) {
    const rawResponse = await fetch(API_ENDPOINT.KIRIM_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.KEY,
      },
      body: JSON.stringify(data),
    });
  }
}

export default RestaurantDbSource;
