import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
                    <div class="content">
                    <h2 class="content__heading">Resto Favorit Anda :</h2>
                    <div id="movies" class="movies">
                
                    </div>
                    </div>
                `;
  },

  async afterRender() {
    const movies = await FavoriteRestoIdb.getAllMovies();
    const moviesContainer = document.querySelector('#movies');
    movies.forEach((movie) => {
      moviesContainer.innerHTML += createRestoItemTemplate(movie);
    });
  },
};

export default Like;
