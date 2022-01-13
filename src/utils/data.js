import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export const getDateDuration = (startDate, endDate) => {
  const dateDuration = dayjs.duration(dayjs(endDate).diff(dayjs(startDate)));
  const days = dateDuration.days();
  const hours = dateDuration.hours();
  const minutes = dateDuration.minutes();

  if (days === 0 && hours === 0) {
    return `${minutes}M`;
  } else if (days === 0) {
    return `${hours}H ${minutes}M`;
  } else {
    return `${days}D ${hours}H ${minutes}M`;
  }
};

export const dayDM = (data) => dayjs(data).format('D MMM');
export const dataYMD = (data) => dayjs(data).format('YYYY-MM-DD');
export const dataHm = (data) => dayjs(data).format('HH:mm');
export const dataDMY = (data) => dayjs(data).format('DD/MM/YY HH:m');
export const dataYMDHm = (data) => dayjs(data).format('YYYY-MM-DD');

export const sortTripEventsByDay = (tripEventA, tripEventB) => dayjs(tripEventA.dateFrom).diff(dayjs(tripEventB.dateFrom));

export const sortTripEventsByTime = (tripEventA, tripEventB) =>
  dayjs(tripEventA.dateFrom).diff(dayjs(tripEventA.dateTo)) - dayjs(tripEventB.dateFrom).diff(dayjs(tripEventB.dateTo));

export const sortTripEventsByPrice = (tripEventA, tripEventB) => tripEventB.basePrice - tripEventA.basePrice;
