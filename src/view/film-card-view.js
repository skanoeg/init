import {createElement} from '../render.js';

const createNewFIlmCardViewTemplate = () => '<section class="film-details"></section>';


export default class NewFilmCardView {
    getTemplate() {
    return createNewFIlmCardViewTemplate();
}

getELement() {
    if(!this.element) {
        this.element = createElement(this.getTemplate());
    }
return this.element;
}

removeElement() {
    this.element = null;
}
}
