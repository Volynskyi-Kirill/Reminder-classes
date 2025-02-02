import { isNowNumeratorWeek } from './utils';

export const LESSONS = {
  enterpriseEconomics: 'Економіка підприємства',
  projectPractice: 'Проєктний практикум',
  probabilityAndStatistics: 'Теорія ймовірності та математична статистика',
  automatedEconomicInfoProcessingTech:
    'ТАОЕІ (Технологія автоматизованої обробки економічної інформації)',
  computerGraphicsAnimation: 'Комп’ютерна графіка та анімація',
  groupDynamicsCommunication: 'Групова динамика і комунікації',
  automatedInfoProcessingSystems:
    'САОІ (Системи автоматизованої обробки інформації)',
  webTechnologies: 'Веб-технології',
};

export const TEACHERS_LIST = {
  enterpriseEconomics: 'Болваненко',
  projectPractice: 'Лазарева',
  probabilityAndStatistics: 'Ткаченко',
  automatedEconomicInfoProcessingTech: 'Мандрика',
  computerGraphicsAnimation: 'Лазарева',
  groupDynamicsCommunication: 'Мандрика',
  automatedInfoProcessingSystems: 'Мандрика',
  webTechnologies: 'Невідомо',
};

export const TEACHERS_ARRAY = [
  {
    subject: LESSONS.enterpriseEconomics,
    name: TEACHERS_LIST.enterpriseEconomics,
  },
  { subject: LESSONS.projectPractice, name: TEACHERS_LIST.projectPractice },
  {
    subject: LESSONS.probabilityAndStatistics,
    name: TEACHERS_LIST.probabilityAndStatistics,
  },
  {
    subject: LESSONS.automatedEconomicInfoProcessingTech,
    name: TEACHERS_LIST.automatedEconomicInfoProcessingTech,
  },
  {
    subject: LESSONS.computerGraphicsAnimation,
    name: TEACHERS_LIST.computerGraphicsAnimation,
  },
  {
    subject: LESSONS.groupDynamicsCommunication,
    name: TEACHERS_LIST.groupDynamicsCommunication,
  },
  {
    subject: LESSONS.automatedInfoProcessingSystems,
    name: TEACHERS_LIST.automatedInfoProcessingSystems,
  },
  { subject: LESSONS.webTechnologies, name: TEACHERS_LIST.webTechnologies },
];

export const LESSON_NUMBER = {
  1: '08:30 - 09:50',
  2: '10:00 - 11:20',
  3: '11:30 - 12:50',
};

export const STUDY_DAYS = {
  MONDAY: 'monday',
  TUESDAY: 'tuesday',
  WEDNESDAY: 'wednesday',
  THURSDAY: 'thursday',
  FRIDAY: 'friday',
};

export const LESSON_DETAILS = {
  enterpriseEconomics: {
    lessonName: LESSONS.enterpriseEconomics,
    link: 'https://us05web.zoom.us/j/9978212434?pwd=UEtYeHVSUUNqNVhzeFJNcVdrQlkrZz09',
  },
  projectPractice: {
    lessonName: LESSONS.projectPractice,
    link: 'https://meet.google.com/pbq-huap-teu',
  },
  probabilityAndStatistics: {
    lessonName: LESSONS.probabilityAndStatistics,
    link: 'https://meet.google.com/vyd-aifj-cjf',
  },
  automatedEconomicInfoProcessingTech: {
    lessonName: LESSONS.automatedEconomicInfoProcessingTech,
    link: 'https://meet.google.com/kys-woqb-ksv',
  },
  computerGraphicsAnimation: {
    lessonName: LESSONS.computerGraphicsAnimation,
    link: 'https://meet.google.com/pbq-huap-teu',
  },
  groupDynamicsCommunication: {
    lessonName: LESSONS.groupDynamicsCommunication,
    link: 'https://meet.google.com/kys-woqb-ksv',
  },
  automatedInfoProcessingSystems: {
    lessonName: LESSONS.automatedInfoProcessingSystems,
    link: 'https://meet.google.com/kys-woqb-ksv',
  },
  webTechnologies: {
    lessonName: LESSONS.webTechnologies,
    link: 'https://meet.google.com/csv-aqog-zsu',
  },
};

export const CLASSES_SCHEDULE = {
  [STUDY_DAYS.MONDAY]: {
    [LESSON_NUMBER[1]]: isNowNumeratorWeek()
      ? LESSON_DETAILS.enterpriseEconomics
      : LESSON_DETAILS.groupDynamicsCommunication,
    [LESSON_NUMBER[2]]: isNowNumeratorWeek()
      ? LESSON_DETAILS.projectPractice
      : LESSON_DETAILS.probabilityAndStatistics,
    [LESSON_NUMBER[3]]: LESSON_DETAILS.automatedInfoProcessingSystems,
  },
  [STUDY_DAYS.TUESDAY]: {
    [LESSON_NUMBER[1]]: LESSON_DETAILS.automatedEconomicInfoProcessingTech,
    [LESSON_NUMBER[2]]: LESSON_DETAILS.computerGraphicsAnimation,
    [LESSON_NUMBER[3]]: LESSON_DETAILS.groupDynamicsCommunication,
  },
  [STUDY_DAYS.WEDNESDAY]: {
    [LESSON_NUMBER[1]]: LESSON_DETAILS.probabilityAndStatistics,
    [LESSON_NUMBER[2]]: LESSON_DETAILS.webTechnologies,
    [LESSON_NUMBER[3]]: LESSON_DETAILS.projectPractice,
  },
  [STUDY_DAYS.THURSDAY]: {
    [LESSON_NUMBER[1]]: isNowNumeratorWeek()
      ? LESSON_DETAILS.automatedInfoProcessingSystems
      : LESSON_DETAILS.automatedEconomicInfoProcessingTech,
    [LESSON_NUMBER[2]]: LESSON_DETAILS.enterpriseEconomics,
    [LESSON_NUMBER[3]]: LESSON_DETAILS.computerGraphicsAnimation,
  },
  [STUDY_DAYS.FRIDAY]: {
    [LESSON_NUMBER[1]]: LESSON_DETAILS.probabilityAndStatistics,
    [LESSON_NUMBER[2]]: LESSON_DETAILS.webTechnologies,
    [LESSON_NUMBER[3]]: LESSON_DETAILS.computerGraphicsAnimation,
  },
};

export const SCHEDULE_COMMANDS = {
  TODAY: 'today',
  TOMORROW: 'tomorrow',
  ...STUDY_DAYS,
};
