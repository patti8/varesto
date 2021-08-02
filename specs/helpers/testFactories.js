import LikeButtonPresenter from '../../src/scripts/utils/like-button-initiator';
import FavoriteRestoIdb from '../../src/scripts/data/favoriteresto-idb';

const createLikeButtonPresenterWithResto = async (movie) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteRestoIdb,
    movie,
  });
};

export {createLikeButtonPresenterWithResto};
