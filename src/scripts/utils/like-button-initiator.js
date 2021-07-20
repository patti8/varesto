/* eslint-disable no-underscore-dangle */
import FavoriteRestoIdb from '../data/favoriteresto-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeButtonInitiator = {
  async init({ likeButtonContainer, movie }) {
    this._likeButtonContainer = likeButtonContainer;
    this._movie = movie;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._movie;

    if (await this._isMovieExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isMovieExist(id) {
    const movie = await FavoriteRestoIdb.getMovie(id);
    return !!movie;
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putMovie(this._movie);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteMovie(this._movie.id);
      this._renderButton();
    });
  },
};

export default LikeButtonInitiator;

// const LikeButtonInitiator = {
//     async init({ LikeButtonContainer, makan }) {
//         this._likeButtonContainer = LikeButtonContainer;
//         this._makan = makan;

//         await this._renderButton();
//     },

//     async _renderButton() {
//         const { id } = this._makan;

//         if (await this._isMakanExist(id)) {
//             this._renderLiked();
//         } else {
//             this._renderLike();
//         }
//     },

//     async _isMakanExist(id) {
//         const makan = await FavoriteRestoIdb.getResto(id);
//         return !!makan;
//     },

//     _renderLike() {
//         this._likeButtonContainer.innerHTML = createLikeButtonTemplate();

//         const likeButton = document.querySelector('#likeButton');
//         likeButton.addEventListener('click', async () => {
//             FavoriteRestoIdb.putResto(this,_makan);
//             this._renderButton();
//         })
//     },

//     _renderLiked() {
//         this._likeButtonContainer.innerHTML = createLikedButtonTemplate();

//         const likeButton = document.querySelector('#likeButton');
//         likeButton.addEventListener('click', async ()=> {
//             await FavoriteRestoIdb.deleteResto(this._makan.id);
//             this._renderButton();
//         } )
//     },
// };

// export default LikeButtonInitiator;
