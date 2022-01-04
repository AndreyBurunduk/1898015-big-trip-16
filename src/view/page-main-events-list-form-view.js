import dayjs from 'dayjs';
import {dataFrom} from '../mock/formtime.js';

const eventOfferSelector = (checkBoxArr) => {
  let result = '';
  for (const i of checkBoxArr) {
    result += `<div class="event__offer-selector">
            <input class="event__offer-checkbox  visually-hidden" id="${i.idAndFor}" type="checkbox" name="${i.name}">
            <label class="event__offer-label" for="${i.idAndFor}">
              <span class="event__offer-title">${i.type}</span>
                +€&nbsp;
              <span class="event__offer-price">${i.price}</span>
            </label>
        </div>`;
  }
  return result;
};

const createMainEventsListOffers = (offersArr) =>{
  const offerCheckboxArr = [
    { id: 1, idAndFor: 'event-offer-luggage-1', name: 'event-offer-luggage', type: 'Add luggage', price: 50, },
    { id: 2, idAndFor: 'event-offer-comfort-1', name: 'event-offer-comfort', type: 'Switch to comfort', price: 80, },
    { id: 3, idAndFor: 'event-offer-meal-1', name: 'event-offer-meal', type: 'Add meal', price: 15, },
    { id: 4, idAndFor: 'event-offer-seats-1', name: 'event-offer-seats', type: 'Choose seats', price: 5, },
    { id: 5, idAndFor: 'event-offer-train-1', name: 'event-offer-train', type: 'Travel by train', price: 40, },
  ];
  if (offersArr.length > 0) {
    return `
      <section class="event__section  event__section--offers">
        <h3 class="event__section-title  event__section-title--offers">Offers</h3>
        <div class="event__available-offers">
          ${eventOfferSelector(offerCheckboxArr)}
      </div>
    </section>`;
  } else {
    return '<!-- net-->';
  }
};

const createMainEventsListDestination = (eventDestination, eventPhotos) =>
  `
  <section class="event__section  event__section--destination">
    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
    <p class="event__destination-description">${eventDestination}</p>

    <div class="event__photos-container">
        <div class="event__photos-tape">
          <img class="event__photo" src="${eventPhotos}" alt="Event photo">
        </div>
    </div>
  </section>

`;
/*


  <div class="event__type-item">
  <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
  <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
  </div>*/
const createMainTypeListGroup = () =>{
  let result = ' ';
  const listGroupArr = [
    {type: 'event-type-taxi-1', classLabel: 'event__type-label--taxi', textLebel: 'Taxi', inputValue: 'taxi'},
    {type: 'event-type-bus-1', classLabel: 'event__type-label--bus', textLebel: 'Bus', inputValue: 'bus'},
    {type: 'event-type-train-1', classLabel: 'event__type-label--train', textLebel: 'Train', inputValue: 'train'},
    {type: 'event-type-ship-1', classLabel: 'event__type-label--ship', textLebel: 'Ship', inputValue: 'ship'},
    {type: 'event-type-drive-1', classLabel: 'event__type-label--drive', textLebel: 'Drive', inputValue: 'drive'},
    {type: 'event-type-flight-1', classLabel: 'event__type-label--flight', textLebel: 'Flight', inputValue: 'flight'},
    {type: 'event-type-check-in-1', classLabel: 'event__type-label--check-in', textLebel: 'Check-in', inputValue: 'check-in'},
    {type: 'event-type-sightseeing-1', classLabel: 'event__type-label--sightseeing', textLebel: 'Sightseeing', inputValue: 'sightseeing'},
    {type: 'event-type-restaurant-1', classLabel: 'event__type-label--restaurant', textLebel: 'Restaurant', inputValue: 'restaurant'},
  ];
  for (const iterator of listGroupArr) {
    result +=`
      <div class="event__type-item">
        <input id="${iterator.type}" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${iterator.inputValue}">
        <label class="event__type-label  ${iterator.classLabel}" for="${iterator.type}">${iterator.textLebel}</label>
      </div>`;
  }
  return result;
};
const createMainFieldGroupDestination = () =>
  `
 <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix"></option>
                    </datalist>
   `;

export const createMainEventsListEdit = (eventArr = {}) => {
  const {
    eventType = 'Taxi',
    eventTypeIcon = 'img/icons/taxi.png',
    eventTitle = ' ',
    eventPrice = '0',
    startData = dayjs(),
    endData = dayjs(),
    eventOffers = [],
    eventDestination = null,
    eventPhotos = ' ',
  } = eventArr;
  return `
    <form class="event event--edit" action="#" method="post">
      <header class="event__header">
        <div class="event__type-wrapper">
          <label class="event__type  event__type-btn" for="event-type-toggle-1">
            <span class="visually-hidden">Choose event type</span>
            <img class="event__type-icon" width="17" height="17" src="${eventTypeIcon}" alt="Event type icon">
          </label>
          <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

          <div class="event__type-list">
            <fieldset class="event__type-group">
              <legend class="visually-hidden">Event type</legend>
              ${createMainTypeListGroup()}
            </fieldset>
          </div>
        </div>

        <div class="event__field-group  event__field-group--destination">
          <label class="event__label  event__type-output" for="event-destination-1">
            ${eventType}
          </label>
          <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${eventTitle}" list="destination-list-1">
          <!-- -->
          ${createMainFieldGroupDestination()}

        </div>

        <div class="event__field-group  event__field-group--time">
          <label class="visually-hidden" for="event-start-time-1">From</label>
          <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${dataFrom(startData)}">
            &mdash;
          <label class="visually-hidden" for="event-end-time-1">To</label>
          <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${dataFrom(endData)}">
        </div>
        <div class="event__field-group  event__field-group--price">
          <label class="event__label" for="event-price-1">
            <span class="visually-hidden">Price</span>
              &euro;
          </label>
          <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${eventPrice}">
        </div>
        <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
        <button class="event__reset-btn" type="reset">Delete</button>
        <button class="event__rollup-btn" type="button">
          <span class="visually-hidden">Open event</span>
        </button>
      </header>
    <section class="event__details">

    <!--2 поля на выбор offer или destination-->
      ${createMainEventsListOffers(eventOffers)}
      ${createMainEventsListDestination(eventDestination, eventPhotos)}
    </section>

  </form>

`;
};

