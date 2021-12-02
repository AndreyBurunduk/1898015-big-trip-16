//функция генерирует случайные числа с указанием количество знаков после запятойс проверкой на вводимые значения
const getRandomInt = (min, max, decimals=0) => {
  if (min >= 0 && max > min) {
    const num = Math.random() * (max - min + 1) + min;
    return num.toFixed(decimals);
  }
  return 'Ввели не верный значения';
};

const randomNumber = () => {
  const id = getRandomInt(1, 5);
  if (id < 10) {
    return `0${id}`;
  } else {
    `${id}`;
  }
};
//функция возращает рандомный элемент из массива
const getRandomElement = (elements) => {
  const arr = Math.floor(Math.random() * elements.length);
  return elements[arr];
};

const ROUTES = ['Taxi', 'Bus', 'Train', 'Ship', 'Drive', 'Flight', 'Check-in', 'Sightseeing', 'Restaurant',];
const CITIES = ['Geneva', 'Amsterdam', 'Chamonix', 'London'];
const DESTINATION = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];

export const getTrip = () => ({
  typeRoute: getRandomElement(ROUTES),
  eventTitle: getRandomElement(CITIES),
  timeStart: null,
  timeFinish: null,
  offers: {
    addluggage: true,
    comfortClass: true,
    addMeal: true,
    chooseSeats: true,
    travelTrain: true,
  },
  destination: getRandomElement(DESTINATION),
  foto:'',
  favorite: true,
});
