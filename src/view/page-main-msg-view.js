export const createSitePageMainEventsMsgEverthing = () =>
  //Switch trip view
  `
   <p class="trip-events__msg">Click New Event to create your first point</p>
             <!--
            Значение отображаемого текста зависит от выбранного фильтра:
              * Everthing – 'Click New Event to create your first point'
              * Past — 'There are no past events now';
              * Future — 'There are no future events now'.
          -->
  `;

  export const createSitePageMainEventsMsgFuture = () =>
    //Switch trip view
    `
     <p class="trip-events__msg">There are no future events now</p>
             <!--
            Значение отображаемого текста зависит от выбранного фильтра:
              * Everthing – 'Click New Event to create your first point'
              * Past — 'There are no past events now';
              * Future — 'There are no future events now'.
          -->
`;

export const createSitePageMainEventsMsgPast = () =>
  //Switch trip view
  `
     <p class="trip-events__msg">There are no past events now</p>
             <!--
            Значение отображаемого текста зависит от выбранного фильтра:
              * Everthing – 'Click New Event to create your first point'
              * Past — 'There are no past events now';
              * Future — 'There are no future events now'.
          -->
`;

export const createSitePageEventsMsgLoading = () =>
  //Switch trip view
  `
  <p class="trip-events__msg">Loading...</p>
`;
