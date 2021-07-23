import RestaurantDbSource from '../../data/restaurantdb-source';
import {createRestoItemTemplate} from '../templates/template-creator';
import '../components/ini-hero';

const TampilSemua = {
  async render() {
    return `
      <div class="content">
        <ini-hero></ini-hero>
        <div id="resto" class="movies"></div>
      </div>
    `;
  },

  async afterRender() {
    const resto = await RestaurantDbSource.getAllVaresto();
    const restoContainer = document.querySelector('#resto');
    resto.forEach((myresto) => {
      restoContainer.innerHTML += createRestoItemTemplate(myresto);
    });

    // TODO: tampilkan movies di dalam DOM
  },
};

export default TampilSemua;
