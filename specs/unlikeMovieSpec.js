/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Resto', () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoIdb.putMovie({id: 1});
  });

  afterEach(async () => {
    await FavoriteRestoIdb.deleteMovie(1);
  });

  it('should display unlike widget when the resto has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this movie"]')).toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoIdb.getAllMovies()).toEqual([]);

    // FavoriteRestoIdb.deleteMovie(1);
  });

  it('should not throw error if the unliked resto is not in the list', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    });

    await FavoriteRestoIdb.deleteMovie(1);

    document.querySelector('[aria-label="unlike this movie"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoIdb.getAllMovies()).toEqual([]);
  });
});
