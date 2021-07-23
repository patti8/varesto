/* eslint-disable max-len */
import RestaurantDbSource from '../../data/restaurantdb-source';
import UrlParser from '../../routes/url-parser';
// eslint-disable-next-line no-unused-vars
import {createRestoDetailTemplate, createLikeButtonTemplate} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
            <h1>Detail Resto</h1>
            <br>
            <div id="makan" class="makan"></div>
            <div id="likeButtonContainer"></div>

        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await RestaurantDbSource.getDetail(url.id);
    // console.log(makan)
    const makanContainer = document.querySelector('#makan');
    makanContainer.innerHTML = createRestoDetailTemplate(movie);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie,
    });
    // const likeButtonContainer = document.querySelector('#likeButtonContainer');
    // likeButtonContainer.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;
