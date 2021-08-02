/* eslint-disable new-cap */
Feature('Unliking Movies');
const assert = require('assert');


Before(({I}) => {
  I.amOnPage('/');
});

Scenario('Unlike one resto', async ({I}) => {
  // I.seeElement('#query');
  // I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
  // I.amOnPage('/');

  I.seeElement('.movie__title a');

  const firstFilm = locate('.movie__title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.movie__title a');

  const likeResto = locate('.movie__title a').first();
  const likedRestoTitle = await I.grabTextFrom('.movie__title a');

  assert.strictEqual(firstFilmTitle, likedRestoTitle);
  I.click(likeResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.see('Tidak ada film untuk ditampilkan', '.movie-item__not__found');
  // I.see('Tampilan tidak ada', ');

  // assert.strictEqual(firstFilmTitle, likedFilmTitle);
  // const likedFilmTitle = await I.grabTextFrom('.movie__item');
});

