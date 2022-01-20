import {Offer} from '../utils/const.js';
import {getRandomInt, getRandomSignedFloat} from '../utils/utils.js';

export const getOffers = (type) => {
  const offersList = Offer.find((offer) => offer.type === type).offers;
  return offersList.sort(getRandomSignedFloat).slice(0, getRandomInt(0, offersList.length));
};
