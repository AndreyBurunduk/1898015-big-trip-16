import { DESCRIPTIONS_TEXT, TYPES, CITIES, OFFER_TITLES,} from '../utils/const.js';
import {
  getRandomInt,
} from '../utils/utils.js';
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
const getDescription = () =>
  DESCRIPTIONS_TEXT.sort(() => 0.5 - Math.random())
    .slice(0, getRandomInt(0, 5 - 1) + 1)
    .join(' ');

const getTripCity = () => CITIES[getRandomInt(0, CITIES.length - 1)];

const getTripEventType = () => TYPES[getRandomInt(0, TYPES.length - 1)];

const getBasePrice = () => getRandomInt(0, 50);

const getOfferPrice = () => getRandomInt(0, 10);

const getOffersCount = () => getRandomInt(0, 5);

const getPhotoCount = () => getRandomInt(0, 5 - 1) + 1;

const getDate = () => dayjs().add(getRandomInt(-2880, 2880), 'minute');

const getPhotos = () =>
  Array.from({ length: getPhotoCount() }, (value, index) => ({
    src: `http://picsum.photos/300/200?r=${getRandomInt(1, 100)}`,
    description: `Random photo №${index + 1}`,
  }));

const getDestination = () => ({
  description: getDescription(),
  name: getTripCity(),
  pictures: getPhotos(),
});

const getOffers = (type) => {
  const offersCount = getOffersCount();
  const offersTitles = OFFER_TITLES.sort(() => getRandomInt(-1, 1)).slice(0, offersCount);
  const offers = Array.from({ length: offersCount }, (value, index) => ({
    id: index, title: offersTitles[index], price: getOfferPrice(),}));
  return { type, offers };
};

export const getEventItem = () => {
  const type = getTripEventType();
  const firstDate = getDate();
  const secondDate = getDate();
  return {
    id: nanoid(),
    basePrice: getBasePrice(),
    dateFrom: dayjs(Math.min(firstDate, secondDate)).toDate(),
    dateTo: dayjs(Math.max(firstDate, secondDate)).toDate(),
    destination: getDestination(),
    isFavorite: Boolean(getRandomInt()),
    offers: getOffers(type),
    type,
  };
};


