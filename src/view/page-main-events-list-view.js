import AbstractView from './abstract-view.js';

const createMainEventsList = () =>
  //Switch trip view
  `
    <ul class="trip-events__list">

    <!--сюда вставить 9шт отправлений  подключать форму с описанием-->

    </ul>
`;

export default class TripEventsListView extends AbstractView {
  get template() {
    return createMainEventsList();
  }
}
