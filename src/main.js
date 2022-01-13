import { RenderPosition, render, replace } from './render.js';
import { getEventItem } from './mock/mock.js';


import TripInfoView from './view/trip-main-info-view.js';
import TripMessageView from './view/page-main-msg-view.js';
import TripTabsView from './view/trip-main-controls-view.js';
import TripFiltersView from './view/trip-main-filters-view.js';
import TripSortView from './view/page-main-events-sort-view.js';
import TripEventsListView from './view/page-main-events-list-view.js';
import TripEventView from './view/page-main-trip-events-item-view.js';
import TripEventEditorView from './view/page-main-events-list-form-view.js';

//создаем массив данных
const elements = 3;
const elementsArr = Array.from({ length: elements }, getEventItem);
window.console.log(elementsArr);


const tripMain = document.querySelector('.trip-main');
const tripControlsNavigation = tripMain.querySelector('.trip-controls__navigation');
const tripFilters = tripMain.querySelector('.trip-controls__filters');
const tripEvents = document.querySelector('.trip-events');


const renderTripEvent = (tripEventsList, element) => {
  const tripEventComponent = new TripEventView(element);
  const tripEventEditorComponent = new TripEventEditorView(element);

  const switchEventToEditor = () =>
    replace(tripEventEditorComponent, tripEventComponent);

  const switchEditorToEvent = () =>
    replace(tripEventComponent, tripEventEditorComponent);

  const onEscKeydown = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      switchEditorToEvent();
      document.removeEventListener('keydown', onEscKeydown);
    }
  };

  tripEventComponent.setExpandClickHandler(() => {
    switchEventToEditor();
    document.addEventListener('keydown', onEscKeydown);
  });

  tripEventEditorComponent.setCollapseClickHandler(() => {
    switchEditorToEvent();
    document.removeEventListener('keydown', onEscKeydown);
  });

  tripEventEditorComponent.setSubmitFormHandler(() => {
    switchEditorToEvent();
    document.removeEventListener('keydown', onEscKeydown);
  });

  render(tripEventsList, tripEventComponent, RenderPosition.BEFOREEND);
};

render(tripControlsNavigation, new TripTabsView(), RenderPosition.BEFOREEND);
render(tripFilters, new TripFiltersView(), RenderPosition.BEFOREEND);

if (elementsArr.length === 0 ) {
  render(elementsArr, new TripMessageView(), RenderPosition.BEFOREEND);
} else {
  const tripEventsList = new TripEventsListView();

  render(tripMain, new TripInfoView(elementsArr), RenderPosition.AFTERBEGIN);
  render(tripEvents, new TripSortView(), RenderPosition.BEFOREEND);
  render(tripEvents, tripEventsList, RenderPosition.BEFOREEND);
  elementsArr.forEach((element) => renderTripEvent(tripEventsList, element));
}

