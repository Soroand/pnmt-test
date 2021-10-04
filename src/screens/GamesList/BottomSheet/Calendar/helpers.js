export const monthNames = [
  'Январь',
  'Февраль',
  'Март',
  'Арель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
export const weekdays = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

const WEEK_LENGTH = 7;

export function getWeeksForMonth(month, year) {
  const firstOfMonth = new Date(year, month, 1);
  const lastOfMonth = new Date(year, month, 0);
  const lastDayOfMonth = lastOfMonth.getDate();

  const firstDayOfWeek =
    firstOfMonth.getDay() - 1 === -1 ? 6 : firstOfMonth.getDay() - 1;
  const weeks = [[]];

  let currentWeek = weeks[0];
  let currentDate = firstOfMonth;

  for (let i = 0, day = firstDayOfWeek - 1; i < firstDayOfWeek; i++, day--) {
    currentWeek.push(new Date(year, month - 1, lastDayOfMonth - day));
  }

  while (currentDate.getMonth() === month) {
    if (currentWeek.length === WEEK_LENGTH) {
      currentWeek = [];
      weeks.push(currentWeek);
    }

    currentWeek.push(currentDate);
    currentDate = new Date(year, month, currentDate.getDate() + 1);
  }

  for (let i = currentWeek.length, day = 1; i < 7; i++, day++) {
    currentWeek.push(new Date(year, month + 1, day));
  }

  return weeks;
}
