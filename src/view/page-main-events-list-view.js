import AbstractView from './abstract-view.js';

const createTripEventsList = () =>
  `<ul class="trip-events__list">
  </ul>`;

export default class PageMainEventsListView extends AbstractView {
  get template() {
    return createTripEventsList();
  }
}
