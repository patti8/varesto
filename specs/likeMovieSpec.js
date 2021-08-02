/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import LikeButtonInitiator from '../src/scripts/utils/like-button-initiator';
import FavoriteRestoIdb from '../src/scripts/data/favoriteresto-idb';

describe('Liking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="like this movie"]')).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    });

    expect(document.querySelector('[aria-label="unlike this movie"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    const movie = await FavoriteRestoIdb.getMovie(1);

    expect(movie).toEqual({id: 1});

    FavoriteRestoIdb.deleteMovie(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      movie: {
        id: 1,
      },
    });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestoIdb.putMovie({id: 1});
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    // tidak ada film yang ganda
    expect(await FavoriteRestoIdb.getAllMovies()).toEqual([{id: 1}]);

    FavoriteRestoIdb.deleteMovie(1);
  });

  // menggunakan metode xit, bukan it
  it('should not add a resto when it has no id', async () => {
    // await LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   movie: {},
    // });

    // document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // expect(await FavoriteRestoIdb.getAllMovies()).toEqual([]);
  });
});
