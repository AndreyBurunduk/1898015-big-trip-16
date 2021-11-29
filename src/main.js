import {renderTemplate, RenderPosition} from './render.js';
import {createTripMainTripInfo} from './view/site-trip-main-trip-info-view.js';
import {} from './view/site-trip-main-controls-view.js';
import {} from './view/site-trip-main-controls-view.js';
import {} from './view/site-trip-main-controls-view.js';
import {} from './view/site-trip-main-controls-view.js';
import {} from './view/site-trip-main-controls-view.js';

//ишем контейнер для  создания шапки
const siteTripMain = document.querySelector('.trip-main');

//ищем куда вставить блок trip-info
const tripMainInfo = siteTripMain.querySelector('.trip-controls');
//отрисовывем блок trip-info
renderTemplate(tripMainInfo, createTripMainTripInfo(), RenderPosition.BEFOREBEGIN);

