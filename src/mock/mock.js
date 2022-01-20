import dayjs from 'dayjs';
import {nanoid} from 'nanoid';
import {TripEventType} from '../utils/const.js';
import { getRandomInt, getRandomSignedFloat } from '../utils/utils.js';
import {getOffers} from './get-offer.js';
import {getDestination, getTripCity} from './get-destination.js';

const MAX_BASE_PRICE = 50;
const MAX_MINUTES_GAP = 2880;

const getTripEventType = () => TripEventType[Object.keys(TripEventType).sort(getRandomSignedFloat).slice(0, 1)];

const getBasePrice = () => getRandomInt(0, MAX_BASE_PRICE);

const getDate = () => dayjs().add(getRandomInt(-MAX_MINUTES_GAP, MAX_MINUTES_GAP), 'minute');

export const getTripEvent = () => {
  const type = getTripEventType();
  const firstDate = getDate();
  const secondDate = getDate();

  return {
    id: nanoid(),
    basePrice: getBasePrice(),
    dateFrom: dayjs(Math.min(firstDate, secondDate)).toDate(),
    dateTo: dayjs(Math.max(firstDate, secondDate)).toDate(),
    destination: getDestination(getTripCity()),
    isFavorite: Boolean(getRandomInt()),
    offers: getOffers(type),
    type,
  };
};


