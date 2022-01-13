const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDate = (date) => {
  const myDate = new Date(date);

  return `${
    months[myDate.getMonth() - 1]
  }  ${myDate.getDate()} / ${myDate.getFullYear()}`;
};

export const calcTime = (time) => {
  if (time < 60) {
    return `${time} m`;
  }
  if (time >= 120 && time % 60 === 0) {
    return `${Math.floor(time / 60)} hours`;
  }
  if (time % 60 === 0) {
    return `${Math.floor(time / 60)} hour`;
  }
  return `${Math.floor(time / 60)} h, ${time % 60} m`;
};
