import AbstractView from './abstract-view.js';
import {SortType} from '../utils/const.js';

const createTripSort = (currentSortType) => (
  `<form class="trip-events__trip-sort  trip-sort" action="#" method="get">
    <div class="trip-sort__item  trip-sort__item--day">
      <input id="${SortType.DAY}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${SortType.DAY}" ${currentSortType === SortType.DAY ? 'checked' : ''}>
      <label class="trip-sort__btn" for="${SortType.DAY}">Day</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--event">
      <input id="sort-event" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-event" disabled>
      <label class="trip-sort__btn" for="sort-event">Event</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--time">
      <input id="${SortType.TIME}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${SortType.TIME}" ${currentSortType === SortType.TIME ? 'checked' : ''}>
      <label class="trip-sort__btn" for="${SortType.TIME}">Time</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--price">
      <input id="${SortType.PRICE}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="${SortType.PRICE}" ${currentSortType === SortType.PRICE ? 'checked' : ''}>
      <label class="trip-sort__btn" for="${SortType.PRICE}">Price</label>
    </div>
    <div class="trip-sort__item  trip-sort__item--offer">
      <input id="sort-offer" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-offer" disabled>
      <label class="trip-sort__btn" for="sort-offer">Offers</label>
    </div>
  </form>`
);

export default class PageMainEventsSortView extends AbstractView {
  #currentSortType = null;

  constructor(currentSortType) {
    super();
    this.#currentSortType = currentSortType;
  }

  get template() {
    return createTripSort(this.#currentSortType);
  }

  setSortTypeChangeHandler = (callback) => {
    this._callback.sortTypeChange = callback;
    this.element.addEventListener('change', this.#sortTypeChangeHandler);
  }

  #sortTypeChangeHandler = (evt) => this._callback.sortTypeChange(evt.target.value);
}
