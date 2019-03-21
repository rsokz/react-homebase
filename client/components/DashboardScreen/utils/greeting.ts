import moment from 'moment';

// define cut off hours for morning, afternoon, evening
const AFTERNOON = 12;
const EVENING = 17;

export const generateGreeting = (): string => {
  let greeting = '';
  const currentHour = parseFloat(moment(new Date()).format('HH'));

  if (currentHour >= AFTERNOON && currentHour < EVENING) {
    greeting = 'Good Afternoon';
  } else if (currentHour >= EVENING) {
    greeting = 'Good Evening';
  } else {
    greeting = 'Good Morning';
  }

  return greeting;
};
