import {getTripEvent} from './mock/mock.js';
import TripEventsModel from './model/trip-model.js';
import FilterModel from './model/filter-model.js';
import AppPresenter from './presenter/app-presenter.js';

const TRIP_EVENTS_COUNTER = 20;

const tripEvents = Array.from({length: TRIP_EVENTS_COUNTER}, getTripEvent);

const tripEventsModel = new TripEventsModel();
tripEventsModel.tripEvents = tripEvents;

const filterModel = new FilterModel();

const appPresenter = new AppPresenter(tripEventsModel, filterModel);
appPresenter.init();
