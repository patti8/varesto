import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (varesto) => `
  <h2 class="movie__title">${varesto.name}</h2>
  <img 
    src="${CONFIG.BASE_URL_IMAGE_SM + varesto.pictureId}"  
    alt="${varesto.name}" 
    class="movie__poster"
  />
  <div class="movie__info">
    <p><strong>Alamat ${varesto.address}, ${varesto.city}</strong></p>
    <h4>Rating ⭐️${varesto.rating}</h4>
   
  </div>
  <div class="movie__overview">
    <h3>Overview</h3>
    <p>${varesto.description}</p>
  </div>

  <br>
  <h3>Makanan : </h3>
  ${varesto.menus.foods.map((m) => `
  <div class="movie-item">
    <div class="movie-item__content">
        <p>${m.name}</p>
    </div>
  </div>
  `).join('')}
  
  <br>
  <h3><u>Minuman : </u></h3>
  ${varesto.menus.drinks.map((d) => `
  <div class="movie-item">
    <div class="movie-item__content">
        <p>${d.name}</p>
    </div>
  </div>
  `).join('')}

  <br>
  <h3>Komentar Mereka: </h3>
  ${varesto.customerReviews.map((cr) => `
    <li><small><i>[ ${cr.date} ]</i> </small><strong>${cr.name} : </strong> ${cr.review}</li>
  `).join('')}
`;

const createRestoItemTemplate = (varesto) => `
  <div class="movie-item">
    <div class="movie-item__header">
        <img class="movie-item__header__poster" alt="${varesto.name}"
            src="${CONFIG.BASE_URL_IMAGE_SM}${varesto.pictureId}">
        <div class="movie-item__header__rating">
            <p>⭐️<span class="movie-item__header__rating__score">${varesto.rating}</span></p>
        </div>
    </div>
    <div class="movie-item__content">
        <h3><a href="${`/#/detail/${varesto.id}`}">${varesto.name}</a></h3>
        <p>${varesto.description}</p>
    </div>
  </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
