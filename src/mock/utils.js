import dayjs from 'dayjs';

//функция генерирует случайные числа с указанием количество знаков после запятойс проверкой на вводимые значения
export const getRandomInt = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const shuffleArray = (unshuffledArray) =>
  unshuffledArray
    .map((item) => ({ sort: Math.random(), value: item }))
    .sort((a, b) => a.sort - b.sort)
    .map((item) => item.value);

//функция генерации даты
export const gentDataStart = (DAYS) => dayjs().add(getRandomInt(-DAYS, DAYS), 'day').toDate();
export const getDataEnd = (data,DAYS) => dayjs(data).add(getRandomInt(10, (24*60*DAYS)), 'minut').toDate();

//генерация из массива
export const getRandomArr = (arr) => {
  const indexCities = getRandomInt(0, arr.length - 1);
  return arr[indexCities];
};

//генерация опписания
export const getDestination = (arr) => {
  const max = getRandomInt(1, 5);
  const destination = [];
  for (let index = 0; index < max; index++) {
    destination.push(arr[index]);
  }
  return destination.join(' ');
};


