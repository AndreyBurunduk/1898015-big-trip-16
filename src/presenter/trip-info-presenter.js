import TripMainInfoView from '../view/trip-main-info-view.js';
import {remove, render, RenderPosition} from '../utils/render.js';

export default class TripInfoPresenter {
  #tripModel = null;
  #tripInfoComponent = null;
  #tripMainContainer = null;

  constructor(tripMainContainer, tripModel) {
    this.#tripMainContainer = tripMainContainer;
    this.#tripModel = tripModel;
  }

  init = () => {
    this.#tripInfoComponent = new TripMainInfoView(this.#tripModel.tripEvents);
    render(this.#tripMainContainer, this.#tripInfoComponent, RenderPosition.AFTERBEGIN);
  };

  destroy = () => remove(this.#tripInfoComponent);
}
