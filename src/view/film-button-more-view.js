import {createElement} from '../render.js';

const createFilmButtonMoreTemplate = () => '<button class="films-list__show-more">Show more</button>';

export default class NewFilmButtonMoreView {
    getTemplate() {
    return createFilmButtonMoreTemplate();
}

getELement() {
    if (!this.element) {
        this.element = createElement(this.getTemplate());
    }
return this.element;
}

removeElement() {
    this.element = null;
}
}



