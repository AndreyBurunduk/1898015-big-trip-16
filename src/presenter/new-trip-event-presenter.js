import {render, remove, RenderPosition} from '../utils/render.js';
import {UpdateType, UserAction} from '../utils/const.js';
import PageMainEventListFromView from '../view/page-main-events-list-form-view.js';
import {isEscapeEvent} from '../utils/event.js';

const EMPTY_TRIP_EVENT = {
  basePrice: '',
  dateFrom: '',
  dateTo: '',
  destination: {
    description: '',
    name: '',
    pictures: [],
  },
  isFavorite: false,
  offers: [],
  type: 'flight',
};

export default class NewTripEventPresenter {
  #tripEventsListComponent = null;
  #changeData = null;
  #tripEventEditorComponent = null;
  #destroyCallback = null;

  #tripModel = null;

  constructor(tripModel, tripEventsListComponent, changeData) {
    this.#tripModel = tripModel;
    this.#tripEventsListComponent = tripEventsListComponent;
    this.#changeData = changeData;
  }

  init = (callback) => {
    this.#destroyCallback = callback;

    if (this.#tripEventEditorComponent !== null) {
      return;
    }

    this.#tripEventEditorComponent = new PageMainEventListFromView(this.#tripModel.destinations, this.#tripModel.offersList, {...EMPTY_TRIP_EVENT, isEventNew: true});
    this.#tripEventEditorComponent.setSubmitFormHandler(this.#handleFormSubmit);
    this.#tripEventEditorComponent.setDeleteFormHandler(this.#handleFormDelete);
    this.#tripEventEditorComponent.setDatePickers();

    render (this.#tripEventsListComponent, this.#tripEventEditorComponent, RenderPosition.AFTERBEGIN);

    document.addEventListener('keydown', this.#escKeydownHandler);
  }

  destroy = () => {
    if (this.#tripEventEditorComponent === null) {
      return;
    }

    this.#destroyCallback?.();

    remove(this.#tripEventEditorComponent);
    this.#tripEventEditorComponent = null;

    document.removeEventListener('keydown', this.#escKeydownHandler);
  }

  #escKeydownHandler = (evt) => {
    if (isEscapeEvent(evt)) {
      evt.preventDefault();
      this.destroy();
    }
  };

  setSaving = () => this.#tripEventEditorComponent.updateData({
    isDisabled: true,
    isSaving: true,
  });

  setAborting = () => {
    const resetFormState = () => this.#tripEventEditorComponent.updateData({
      isDisabled: false,
      isSaving: false,
      isDeleting: false,
    });

    this.#tripEventEditorComponent.shake(resetFormState);
  }

  #handleFormSubmit = (newTripEvent) => this.#changeData(
    UserAction.ADD_TRIP_EVENT,
    UpdateType.MAJOR,
    newTripEvent,
  );

  #handleFormDelete = () => this.destroy();
}
