export const createSiteTripMainTripControlsFiltersTabs = () =>
  //Switch trip view
  `
    <div class="trip-filters__filter">
      <input id="filter-everything" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="everything" checked>
      <label class="trip-filters__filter-label" for="filter-everything">Everything/Future/Past</label>
    </div>
  `;
