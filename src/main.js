import NewHeaderProfileView from './view/header-profile-view.js';
import NewFilmButtonMoreView from './view/film-button-more-view.js';
import NewFilmSortView from './view/film-sort-view.js';
import NewFilmCardView from './view/film-card-view.js';

import {render} from './render.js';
import FilmsPresenter from './presenter/films-presenter.js';
const filmPresenter = new FilmsPresenter();

const buttonShowMoreContainer = document.querySelector('.films');
const buttonShowMoreContainerElement = buttonShowMoreContainer.querySelector('.films-list');
render(new NewFilmButtonMoreView(), buttonShowMoreContainerElement);

const siteHeaderElement = document.querySelector('.header');
// const siteHeaderProfileElement = siteHeaderElement.querySelector('.header__profile');
render(new NewHeaderProfileView(), siteHeaderElement);

const filmSortELement = document.querySelector('.sort');
render(new NewFilmSortView(), filmSortELement);

const filmCard = document.querySelector('.film-details');
const filmCardElement = filmCard.querySelector('.film-details__inner');
render(new NewFilmCardView(), filmCardElement);

filmPresenter.init(filmCardElement);
filmPresenter.init(filmSortELement);
filmPresenter.init(siteHeaderElement);
filmPresenter.init(buttonShowMoreContainerElement);