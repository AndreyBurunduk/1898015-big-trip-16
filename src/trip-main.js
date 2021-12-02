import {renderTemplate, RenderPosition} from './render.js';
//trip Main
import {createTripMainTripInfo} from './view/trip_main/info/site-trip-main-trip-info-view.js';
import {createTripMainNavigationTabs} from './view/trip_main/controls/navigation_tabs/site-trip-main-trip-tabs-view.js';
import {createTripMainControlsTripFilters} from './view/trip_main/controls/trip-controls__filters/site-trip-main-controls-trip-filters-view.js';
import {createTripMainControlsTripFiltersTabs} from './view/trip_main/controls/trip-controls__filters/tabs/site-trip-main-trip-filters-view.js';

//ишем контейнер для  создания шапки
const siteTripMain = document.querySelector('.trip-main');

//ищем куда вставить блок trip-info
const tripMainInfo = siteTripMain.querySelector('.trip-controls');
//отрисовывем блок trip-info
renderTemplate(tripMainInfo, createTripMainTripInfo(), RenderPosition.BEFOREBEGIN);

//ищем блок navigation
const tripMainControlsNavigation = siteTripMain.querySelector('.trip-controls__navigation');
//вставляем 2 кнопки
renderTemplate(tripMainControlsNavigation, createTripMainNavigationTabs(), RenderPosition.BEFOREEND);

//ищем блок filtres
const tripMainTripControlsFilters = siteTripMain.querySelector('.trip-controls__filters');
//вставляем блок filtres
renderTemplate(tripMainTripControlsFilters, createTripMainControlsTripFilters(), RenderPosition.BEFOREEND);
//добовляем кнопки 3шт, но только после filtres
const tripMainControlsTripFiltersTabs = tripMainTripControlsFilters.querySelector('.trip-filters');
renderTemplate(tripMainControlsTripFiltersTabs, createTripMainControlsTripFiltersTabs(), RenderPosition.AFTERBEGIN);
