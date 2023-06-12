import {createElement} from '../render.js';

const createNewHeaderProfileViewTemplate = () => '<p class="profile__rating">Movie Buff</p>';

export default class NewHeaderProfileView {
    getTemplate() {
    return createNewHeaderProfileViewTemplate();
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