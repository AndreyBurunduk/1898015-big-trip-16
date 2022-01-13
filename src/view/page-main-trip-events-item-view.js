import AbstractView from './abstract-view.js';
import { dayDM, dataYMD, dataYMDHm, dataHm, getDateDuration } from '../utils/data.js';

const createMainListItem = ({basePrice, dateFrom, dateTo, destination, isFavorite, offers, type}) => {

  const getOfferNodes = () => offers.offers.map(({title, price}) =>
    `<li class="event__offer">
      <span class="event__offer-title">${title}</span>
      &plus;&euro;&nbsp;
      <span class="event__offer-price">${price}</span>
    </li>`).join('');

  const getFavoriteClass = () => isFavorite ? ' event__favorite-btn--active' : '';

  return `<li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="${dataYMD(dateFrom)}">${dayDM(dateFrom)}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="img/icons/${type}.png" alt="Event type icon">
      </div>
      <h3 class="event__title">${type} ${destination.name}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="${dataYMDHm(dateFrom)}">${dataHm(dateFrom)}</time>
          &mdash;
          <time class="event__end-time" datetime="${dataYMDHm(dateTo)}">${dataHm(dateTo)}</time>
        </p>
        <p class="event__duration">${getDateDuration(dateFrom,dateTo)}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${basePrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        ${offers.offers.length > 0 ? getOfferNodes() : ''}
      </ul>
      <button class="event__favorite-btn${getFavoriteClass()}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
      </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>`;
};

export default class TripEventView extends AbstractView {
  #tripEvent = {};

  constructor(tripEvent = {}) {
    super();
    this.#tripEvent = tripEvent;
  }

  get template() {
    return createMainListItem(this.#tripEvent);
  }

  #expandClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.expandClick();
  }

  #favoriteClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.favoriteClick();
  }

  setExpandClickHandler = (callback) => {
    this._callback.expandClick = callback;
    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#expandClickHandler);
  }

  setFavoriteClickHandler = (callback) => {
    this._callback.favoriteClick = callback;
    this.element.querySelector('.event__favorite-btn').addEventListener('click', this.#favoriteClickHandler);
  }
}
