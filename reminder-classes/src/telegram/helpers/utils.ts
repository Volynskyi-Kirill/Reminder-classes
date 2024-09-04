import {
  differenceInCalendarWeeks,
  startOfWeek,
  addMinutes,
  format,
  addDays,
} from 'date-fns';
import { CLASSES_SCHEDULE, SCHEDULE_COMMANDS, STUDY_DAYS } from './constants';

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

export function buildNotificationClassMessage(
  lessonName: string,
  link: string,
) {
  return `Нагадування: ${lessonName} починається за 2 хвилини! \nПосилання: ${link}`;
}

export function buildScheduleAvailableCommands(getSchedulePattern: string) {
  return Object.values(SCHEDULE_COMMANDS)
    .map((day) => {
      return `/${getSchedulePattern}_${day}`;
    })
    .join('\n');
}

function getDayForSchedule(day: string) {
  const daysOfWeek = Object.values(STUDY_DAYS);
  const today = new Date();

  let date;
  if (day === SCHEDULE_COMMANDS.TODAY) {
    date = today;
  } else if (day === SCHEDULE_COMMANDS.TOMORROW) {
    date = addDays(today, 1);
  } else {
    return day;
  }

  const dayOfWeekIndex = (date.getDay() + 6) % 7;
  return daysOfWeek[dayOfWeekIndex];
}

const timeColumnWidth = 20;
const lessonColumnWidth = 40;

export function getScheduleByDay(day: string) {
  const resolvedDay = getDayForSchedule(day);
  const schedule = CLASSES_SCHEDULE[resolvedDay];

  return Object.entries(schedule)
    .map(([time, lesson]) => {
      const lessonName =
        lesson && 'lessonName' in lesson ? lesson.lessonName : 'немає пари';

      return `${time.padEnd(timeColumnWidth)} ${lessonName.padEnd(lessonColumnWidth)}`;
    })
    .join('\n');
}
