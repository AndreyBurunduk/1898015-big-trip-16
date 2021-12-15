import dayjs from 'dayjs';
//функция генерирует случайные числа с указанием количество знаков после запятойс проверкой на вводимые значения
export const getRandomInt = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};
//функция генерации даты
export const getData = () => {
  const start = getRandomInt(10, 43200);
  const finish = getRandomInt(10, 360);
  const startDate = dayjs().add(start, 'minute').toDate();
  const endData = dayjs().add(finish + start, 'minute').toDate();
  return {
    startData: startDate,
    endData: endData,
  };
};

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

