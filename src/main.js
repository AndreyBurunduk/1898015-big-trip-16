import { RenderPosition, render,} from './render.js';
import { getEventItem } from './mock/mock.js';
import TripInfoView from './view/trip-main-info-view.js';
import TripTabsView from './view/trip-main-controls-view.js';
import TripFiltersView from './view/trip-main-filters-view.js';
import TripPresenter from './presenter/trip-presenter.js';
//создаем массив данных
const elements = 21;
const elementsArr = Array.from({ length: elements }, getEventItem);
window.console.log(elementsArr);
const tripMain = document.querySelector('.trip-main');
const tripControlsNavigation = document.querySelector('.trip-controls__navigation');
const tripFilters = document.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');
const tripPresenter = new TripPresenter(tripEvents);

render(tripControlsNavigation, new TripTabsView(), RenderPosition.BEFOREEND);
render(tripFilters, new TripFiltersView(), RenderPosition.BEFOREEND);

if (elements > 0) {
  render(tripMain, new TripInfoView(elementsArr), RenderPosition.AFTERBEGIN);
}
tripPresenter.init(elementsArr);
