
const text = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
  'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.',
  'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.',
  'Sed sed nisi sed augue convallis suscipit in sed felis.',
  'Aliquam erat volutpat.',
  'Nunc fermentum tortor ac porta dapibus.',
  'In rutrum ac purus sit amet tempus.',
];

const offers = [
  {type: 'Add luggage', price: 50,},
  {type: 'Switch to comfort', price: 80,},
  {type: 'Add meal', price: 15,},
  {type: 'Choose seats', price: 5,},
  {type: 'Travel by train', price: 40,},
];

const cities = ['Geneva', 'Amsterdam', 'Chamonix'];

const eventTypeIcon = ['transport', 'img/icons/transport.png'];

const baza = [
  {
    type: 'Taxi',
    icon: 'img/icons/taxi.png',
    offers: [
      ['Upgrade to a business class', 120,],
      ['Choose the radio station', 60],
      ['Order Uber', 20]

    ],
  },
  {
    type: 'Bus',
    icon: 'img/icons/Bus.png',
    offers: [
      ['Upgrade to a business class', 120],
      ['Rent mini-bus', 500,],
    ],
  },
  {
    type: 'Train',
    icon: 'img/icons/train.png',
    offers: [
      ['Upgrade to a business class', 120],
      ['Order breakfast', 60],
    ],
  },
  {
    type: 'Ship',
    icon: 'img/icons/ship.png',
    offers: [
      ['Upgrade to a business class', 120],
      ['Order breakfast', 60],
    ],
  },
  {
    type: 'Drive',
    icon:'img/icons/drive.png',
    offers: [
      ['Детское кресло', 200],
      ['Курить в салоне', 500],
    ],
  },
  {
    type: 'Flight',
    icon: 'img/icons/flight.png',
    offers: [
      ['Негабаритный багаж', 60],
      ['Ранее бронирование', 60],
    ],
  },
  {
    type: 'Check-in',
    icon: 'img/icons/check-in.png',
    offers: [
      ['Check-in online', 20],
      ['Поздний выезд', 50],
    ],
  },
  {
    type: 'Sightseeing',
    icon: 'img/icons/sightseeing.png',
    offers: [
      ['Аудио гид', 50],
      ['Персональный гид', 200],
    ],
  },
  {
    type: 'Restaurant',
    icon: 'img/icons/restaurant.png',
    offers: [
      ['Забронировать столик', 5],
      ['Специальное меню', 10],
    ],
  },
];

export { eventTypeIcon, text, cities, offers, baza };
