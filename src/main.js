import {renderTemplate, RenderPosition} from './render.js';

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


//page main
import {createPageMainStatistics} from './view/page_main/statistics/site-page-main-statics-view';
import {createPageMainStatisticsItem} from './view/page_main/statistics/item/site-page-main-statics-item-view.js';
//msg
import {createSitePageEventsMsgLoading} from './view/page_main/events/msg/site-page-main-trip-events-msg-loading-view.js';
import {createSitePageMainEventsMsgPast} from './view/page_main/events/msg/site-page-main-trip-events-msg -past-view.js';
import {createSitePageMainEventsMsgFuture} from './view/page_main/events/msg/site-page-main-trip-events-msg -future-view.js';


import {createSitePageMainEventsSort} from './view/page_main/events/sort/site-page-main-trip-events-trip-sort-view.js';
import {createSitePageMainTripEventsList} from './view/page_main/events/list/site-page-main-trip-events-list-view';
import {createSitePageMainTripEventsListItem} from './view/page_main/events/list/item/site-page-main-item-view.js';

//forma event
import {createSitePageMainTripEventsListEvent} from './view/page_main/events/list/event/site-page-main-trip-events-list-event-view.js';
import {createSitePageMainTripEventsListEventDestination} from './view/page_main/events/list/event/details/destination/site-page-main-events-list-destination-view.js';
import {createSitePageMainTripEventsListEventOffers} from './view/page_main/events/list/event/details/offers/site-page-main-events-list-offers-view.js';

//ищем контейнер page-Main
const sitepageMain = document.querySelector('.page-main');
const pageMainTripEvents = sitepageMain.querySelector('.trip-events');
//тут настройки сайта

const statistics = false; //true false
const MSG = 4;//1-4
const open = 3;//1-9

//тут у нас 2 состояния statistics или events
if (statistics) {
  //вставляем статистику койнтейнер
  pageMainTripEvents.classList.add('trip-events--hidden');
  renderTemplate(pageMainTripEvents, createPageMainStatistics(), RenderPosition.AFTEREND);
  const pageMainStatistics = sitepageMain.querySelector('.statistics');
  //вставляем данные статистики
  for(let i = 0; i<3; i++){
    renderTemplate(pageMainStatistics, createPageMainStatisticsItem(), RenderPosition.BEFOREEND);
  }
} else {
  //вставляем MSG или список и контент
  switch (MSG) {
    case 1:
      renderTemplate(pageMainTripEvents, createSitePageEventsMsgLoading(), RenderPosition.BEFOREEND);
      break;
    case 2:
      renderTemplate(pageMainTripEvents, createSitePageMainEventsMsgPast(), RenderPosition.BEFOREEND);
      break;
    case 3:
      renderTemplate(pageMainTripEvents, createSitePageMainEventsMsgFuture(), RenderPosition.BEFOREEND);
      break;
    case 4:
      //отрисовка блока сортировки trip-sort данныех списка
      renderTemplate(pageMainTripEvents, createSitePageMainEventsSort(), RenderPosition.BEFOREEND);
      //отрисовки блока предложение trip-events__list
      renderTemplate(pageMainTripEvents, createSitePageMainTripEventsList(), RenderPosition.BEFOREEND);
      //поиск блока trip-events__list для вывода данных trip-events__item
      const pageMainTripEventsList = pageMainTripEvents.querySelector('.trip-events__list');
      //генерация 9 данных по маршруту trip-events__item
      for(let i=0; i<9; i++){
        //условие отрисовки формы event
        if(i===open){
          renderTemplate(pageMainTripEventsList, createSitePageMainTripEventsListEvent(), RenderPosition.BEFOREEND);
          const pageMainEventEdit = pageMainTripEventsList.querySelector('.event__details');
          renderTemplate(pageMainEventEdit, createSitePageMainTripEventsListEventOffers(), RenderPosition.AFTERBEGIN);
          renderTemplate(pageMainEventEdit, createSitePageMainTripEventsListEventDestination(), RenderPosition.BEFOREEND);
        }
        //стандартный ввывод данных trip-events__item
        renderTemplate(pageMainTripEventsList, createSitePageMainTripEventsListItem(), RenderPosition.BEFOREEND);
      }


      break;
  }
}
