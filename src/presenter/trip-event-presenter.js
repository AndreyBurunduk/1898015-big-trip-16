import {render, replace, remove, RenderPosition} from '../render.js';
import TripEventView from '../view/page-main-trip-events-item-view.js';
import TripEventEditorView from '../view/page-main-events-list-form-view.js';


const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export default class TripEventPresenter {
  #tripEventsListComponent = null;
  #changeData = null;
  #changeMode = null;

  #tripEventComponent = null;
  #tripEventEditorComponent = null;

  #tripEvent = null;
  #mode = Mode.DEFAULT;

  constructor(tripEventsListComponent, changeData, changeMode) {
    this.#tripEventsListComponent = tripEventsListComponent;
    this.#changeData = changeData;
    this.#changeMode = changeMode;
  }

  init = (tripEvent = {}) => {
    this.#tripEvent = tripEvent;

    const existingTripEventComponent = this.#tripEventComponent;
    const existingTripEventEditorComponent = this.#tripEventEditorComponent;

    this.#tripEventComponent = new TripEventView(tripEvent);
    this.#tripEventEditorComponent = new TripEventEditorView(tripEvent);

    this.#tripEventComponent.setFavoriteClickHandler(this.#handleFavoriteClick);
    this.#tripEventComponent.setExpandClickHandler(this.#handleExpandClick);
    this.#tripEventEditorComponent.setCollapseClickHandler(this.#handleCollapseClick);
    this.#tripEventEditorComponent.setSubmitFormHandler(this.#handleFormSubmit);

    if (existingTripEventComponent === null || existingTripEventEditorComponent === null) {
      render (this.#tripEventsListComponent, this.#tripEventComponent, RenderPosition.BEFOREEND);
      return;
    }

    if (this.#mode === Mode.DEFAULT) {
      replace(this.#tripEventComponent, existingTripEventComponent);
    }

    if (this.#mode === Mode.EDITING) {
      replace(this.#tripEventEditorComponent, existingTripEventEditorComponent);
    }

    remove(existingTripEventComponent);
    remove(existingTripEventEditorComponent);
  }

  destroy = () => {
    remove(this.#tripEventComponent);
    remove(this.#tripEventEditorComponent);
  }

  resetView = () => {
    if (this.#mode !== Mode.DEFAULT) {
      this.#switchEditorToEvent();
    }
  }

  #switchEventToEditor = () => {
    replace(this.#tripEventEditorComponent, this.#tripEventComponent);
    document.addEventListener('keydown', this.#escKeydownHandler);
    this.#changeMode();
    this.#mode = Mode.EDITING;
  }

  #switchEditorToEvent = () => {
    replace(this.#tripEventComponent, this.#tripEventEditorComponent);
    document.removeEventListener('keydown', this.#escKeydownHandler);
    this.#mode = Mode.DEFAULT;
  }

  #escKeydownHandler = (evt) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      evt.preventDefault();
      this.#switchEditorToEvent();
      document.removeEventListener('keydown', this.#escKeydownHandler);
    }
  };

  #handleFavoriteClick = () => this.#changeData({...this.#tripEvent, isFavorite: !this.#tripEvent.isFavorite});

  #handleExpandClick = () => this.#switchEventToEditor();

  #handleCollapseClick = () => this.#switchEditorToEvent();

  #handleFormSubmit = (tripEvent) => {
    this.#changeData(tripEvent);
    this.#switchEditorToEvent();
  }
}