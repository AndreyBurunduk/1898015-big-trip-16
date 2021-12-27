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

export const dayMonth = (data) => dayjs(data).format('D MMM');
export const dataStart = (data) => dayjs(data).format('HH:mm');
export const dataEnd = (data) => dayjs(data).format('HH:mm');
export const dataFrom = (data) => dayjs(data).format('DD/MM/YY HH:m');
