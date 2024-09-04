import {
  differenceInCalendarWeeks,
  startOfWeek,
  addMinutes,
  format,
} from 'date-fns';

export function isNowNumeratorWeek() {
  const firstNumeratorWeekStart = new Date(2024, 8, 2);
  const currentWeekStart = startOfWeek(new Date(), { weekStartsOn: 1 });

  const weekDifference = differenceInCalendarWeeks(
    currentWeekStart,
    firstNumeratorWeekStart,
    { weekStartsOn: 1 },
  );

  return weekDifference % 2 === 0;
}

export function getDayOfWeek(day: string): number {
  switch (day) {
    case 'Monday':
      return 1;
    case 'Tuesday':
      return 2;
    case 'Wednesday':
      return 3;
    case 'Thursday':
      return 4;
    case 'Friday':
      return 5;
    default:
      return 0;
  }
}

export function generateUniqueJobName(
  lessonName: string,
  day: string,
  time: string,
): string {
  return `${lessonName}_${day}_${time.replace(':', '_')}_reminder`;
}

export function getCronExpressionForLesson(day: string, time: string): string {
  const dayOfWeek = getDayOfWeek(day);
  const [hour, minute] = time.split('-')[0].split(':').map(Number);
  const reminderTime = addMinutes(new Date(0, 0, 0, hour, minute), -2);
  const cronExpression = `${format(reminderTime, 'm')} ${format(reminderTime, 'H')} * * ${dayOfWeek}`;
  return cronExpression;
}

export function buildMessage(lessonName: string, link: string) {
  return `Reminder: ${lessonName} starts in 2 minutes! \nLink: ${link}`;
}
