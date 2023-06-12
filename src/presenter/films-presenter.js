import NewHeaderProfileView from './view/header-profile-view.js';
import NewFilmButtonMoreView from './view/film-button-more-view.js';
import NewFilmSortView from './view/film-sort-view.js';
import NewFilmCardView from './view/film-card-view.js';

import {render} from '../render.js';

export default class FilmsPresenter {
  filmComponent = new FilmView();
  filmListComponent = new FilmListView();
  filmListContainerComponent = new FilmListContainerView();
  filmButtonMoreComponent = new FilmButtonMoreView();

  init = (filmContainer) => {
    this.filmContainer = filmContainer;

    render(this.filmComponent, this.filmContainer);
    render(this.sortComponent, this.filmContainer);
    render(this.filmListComponent, this.filmComponent.getElement());
    render(this.filmListContainerComponent, this.filmComponent.getElement());

    for (let i = 0; i < FILM_COUNT; i++) {
      render(new FilmCardView(), this.filmListContainerComponent.getElement());
    };

    render(this.filmButtonMoreComponent, this.filmListComponent.getElement());
    render(new FilmDetailsView(), this.filmContainer.parentElement);
    };
}


