export const createPageMainStatistics = () =>
  //добавить класс trip-events--hidden
  `
<section class="statistics">
          <h2 class="visually-hidden">Trip statistics</h2>

          <!-- Пример диаграмм -->
          <img src="img/big-trip-stats-markup.png" alt="Пример диаграмм">

<!-- сюда диаграммы 3шт-->

</section>
`;

export const StatisticsItem = () =>
  //добавить класс trip-events--hidden
  `
            <div class="statistics__item">
            <canvas class="statistics__chart" id="money" width="900"></canvas>
          </div>

  `;
