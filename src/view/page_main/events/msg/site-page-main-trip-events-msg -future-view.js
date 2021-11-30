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
