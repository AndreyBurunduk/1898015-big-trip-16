import dayjs from 'dayjs';
import {renderTemplate, RenderPosition} from '../render.js';

export const createMainEventsList = () =>
  //Switch trip view
  `
    <ul class="trip-events__list">

    <!--сюда вставить 9шт отправлений  подключать форму с описанием-->

    </ul>
`;
//import {createSitePageMainTripEventsListItemOffer} from './offers/site-page-main-item-offer-view.js';
//import {renderTemplate, RenderPosition} from './ /render.js';

const formData = (data) =>{
  const startDataDM = dayjs(data.startData).format('D MMM');
  const startDataHM = dayjs(data.startData).format('h:m');
  const finishDataHM = dayjs(data.endData).format('h:m');
  const razDataHM = dayjs(data.startData).diff(dayjs(data.endData), 'ms');
  const r = dayjs(razDataHM).format('h:m');//провериь разницу во времение хз бред пишет
  const startDataDMYHM = dayjs(data.startData).format('DD/MM/YY h:m');
  const finishDataDMYHM = dayjs(data.startData).format('DD/MM/YY h:m');
  return { startDataDM, startDataHM, finishDataHM, r, startDataDMYHM, finishDataDMYHM };
};

export const createMainListItem = (event) =>{
  const {
    eventType,
    eventTypeIcon,
    eventTitle,
    eventPrice,
    eventData,
    eventFavorite,
    eventOffers,
  } = event;

  const favorite = eventFavorite
    ? 'event__favorite-btn--active'
    : '';
const createMainListOffer = (Offer) => `
    <li class="event__offer">
      <span class="event__offer-title">${Offer.type}</span>
        &plus;&euro;&nbsp;
      <span class="event__offer-price">${Offer.price}</span>
    </li>
  `;
  const createListItemOffer =(Offers)=> {
    if (Offers.length > 0) {
      for (const iterator of eventOffers) {
        renderTemplate(iterator, createMainListOffer(Offers), RenderPosition.BEFOREEND);
      }
    }
    return ' ';
  };


  return `
  <li class="trip-events__item">
    <div class="event">
      <time class="event__date" datetime="2019-03-18">${formData(eventData).startDataDM}</time>
      <div class="event__type">
        <img class="event__type-icon" width="42" height="42" src="${eventTypeIcon}" alt="Event type icon">
      </div>
      <h3 class="event__title">${eventType} ${eventTitle}</h3>
      <div class="event__schedule">
        <p class="event__time">
          <time class="event__start-time" datetime="2019-03-18T12:25">${formData(eventData).startDataHM}</time>
          &mdash;
          <time class="event__end-time" datetime="2019-03-18T13:35">${formData(eventData).finishDataHM}</time>
        </p>
        <p class="event__duration">${formData(eventData).r}</p>
      </div>
      <p class="event__price">
        &euro;&nbsp;<span class="event__price-value">${eventPrice}</span>
      </p>
      <h4 class="visually-hidden">Offers:</h4>
      <ul class="event__selected-offers">
        <!--сюда генерировать доп затраты-->
        ${createListItemOffer(eventOffers)}
      </ul>
      <button class="event__favorite-btn ${favorite}" type="button">
        <span class="visually-hidden">Add to favorite</span>
        <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
          <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>
        </svg>
        </button>
      <button class="event__rollup-btn" type="button">
        <span class="visually-hidden">Open event</span>
      </button>
    </div>
  </li>

  `;
};
