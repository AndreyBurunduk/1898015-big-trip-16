import {renderTemplate, RenderPosition} from './render.js';
import { getEventItem } from './mock/mock.js';
/*import dayjs from 'dayjs';
import {getRandomInt} from './mock/utils.js';*/
//подгрузка шаблонов для tripMain
import {createMainInfo} from './view/trip-main-info-view.js';
import {createMainNavigationTabs} from './view/trip-main-controls-view.js';
import {createMainFiltersTabs} from './view/trip-main-filters-view.js';
//подгружаем шаблоны для pageMain
//сортировка
import {createPageMainSort} from './view/page-main-events-sort-view.js';
//список
import{createMainEventsList, createMainListItem,} from './view/page-main-events-list-view.js';
//форма
import{createMainEventsListEdit} from './view/page-main-events-list-form-view.js';
//создаем массив данных
const elements = 4;
const elementsArr = Array.from({length: elements}, getEventItem);
window.console.log(elementsArr);

//начинаем поик элементов для вставки данных из массива
const tripMain = document.querySelector('.trip-main');
//вставили в шапку блок инфо
renderTemplate(tripMain, createMainInfo(), RenderPosition.AFTERBEGIN);
//ищем блок для вставки меню
const tripControlsNavigation = tripMain.querySelector('.trip-controls__navigation');
//вставили 2 кнопки навигации
renderTemplate(tripControlsNavigation, createMainNavigationTabs(), RenderPosition.BEFOREEND);
//ищем блок для вставки фильтра
const tripFilters = tripMain.querySelector('.trip-controls__filters');
// вставляем форму фильтр
renderTemplate(tripFilters, createMainFiltersTabs(), RenderPosition.AFTERBEGIN);

//тут рисуем блок pageMain
const pageMain = document.querySelector('.page-main');
//ищем место для вставки блока фильтр и список данных
const tripEvents = pageMain.querySelector('.trip-events');
//вставляем фильтр trip-events__trip-sort  trip-sort
renderTemplate(tripEvents, createPageMainSort(), RenderPosition.BEFOREEND);
//вставляем блок для данных
renderTemplate(tripEvents, createMainEventsList(), RenderPosition.BEFOREEND);

// ищем куда вставляем данные
const tripEventsList = tripEvents.querySelector('.trip-events__list');
renderTemplate(tripEventsList, createMainEventsListEdit(elementsArr[0]), RenderPosition.BEFOREEND);

//отрисовываем маршруты и события
for (let i = 1; i < elementsArr.length; i++) {
  //вставляем шаблон событий и маршрутов
  renderTemplate(tripEventsList, createMainListItem(elementsArr[i]), RenderPosition.BEFOREEND);
}

