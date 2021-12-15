import { getRandomInt, getRandomArr, getDestination, getData  } from './utils.js';
import { baza, text, cities, offers } from './data.js';

export const getEventItem= () => {
  const arr = getRandomArr(baza);
  return {
    eventData: getData(),
    eventType: arr['type'],
    eventTypeIcon: arr['icon'],
    eventTitle: getRandomArr(cities),
    eventPrice: getRandomInt(20, 1000),
    //получить рандомное значение+
    eventOffers: offers.splice(getRandomInt(0,3), getRandomInt(0,2)),//массив доп значений цены+
    eventDestination: getDestination(text),//список/массив рандомных строк будет зависемость от города+
    eventPhotos: `http://picsum.photos/248/152?r=${getRandomInt(1,10)}`,//рандомное количество фото и не обезательное
    eventFavorite: Boolean(getRandomInt(0,1)),//+
  };
};

/*тут перечилины все изменяемые теги
trip-info__cost-value //общая сумма на все события
trip-info__title //города маршрута
trip-info__dates //дни поездки

//тут пошел обект
trip-events__item //будет название всех событий как то так
event // 1 одно событие+
event__date //дата события+
event__type-icon //тип события+
event__title //город события+
event__start-time начало name = event-start-time конец name = event-end-time //время прохождения события+
event__price-value event__input  event__input--price // общая сумма потраченая на 1 событие
//тут будет массив
event__offer-title //название на что потратили на 1 соббытие
event__offer-price //сумма 1 затраты
event__destination-description //описание места события
event__photos-container // фото события
//булевое значение
event__favorite-icon //фаворит события+

*/

