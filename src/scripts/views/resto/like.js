/* eslint-disable max-len */

import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import FavoriteMovieSearchView from './liked-movies/favorite-movie-search-view';
import FavoriteMovieShowPresenter from './liked-movies/favorite-movie-show-presenter';
import FavoriteMovieSearchPresenter from './liked-movies/favorite-movie-search-presenter';

const view = new FavoriteMovieSearchView();

const Like = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteMovieShowPresenter({view, favoriteMovies: FavoriteRestoIdb});
    new FavoriteMovieSearchPresenter({view, favoriteMovies: FavoriteRestoIdb});
  },
};

export default Like;

// const Like = {
//   async render() {
//     return `
//                     <div class="content">
//                     <h2 class="content__heading">Resto Favorit Anda :</h2>
//                     <div id="movies" class="movies">
//                     </div>
//                     </div>
//                 `;
//   },

//   async afterRender() {
//     const movies = await FavoriteRestoIdb.getAllMovies();
//     const moviesContainer = document.querySelector('#movies');
//     movies.forEach((movie) => {
//       moviesContainer.innerHTML += createRestoItemTemplate(movie);
//     });
//   },
// };

// export default Like;
