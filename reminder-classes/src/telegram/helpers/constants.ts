import { isNowNumeratorWeek } from './utils';

export const LESSONS = {
  physicalEducation: 'Фізичне виховання',
  computerNetworksOrganization: "Організація комп'ютерних мереж",
  visualProgrammingTools: 'ІЗВП',
  numericalMethods: 'Чисельні методи',
  discreteMathematics: 'Дискретна математика',
  basicsOfPhilosophy: 'Основи філософії',
  softwareDesign: 'Конструювання програмного забезпечення ',
  differentialEquations: 'Диференціальні рівняння',
};

export const TEACHERS_LIST = {
  curator: 'Сайко Тетяна Сергіївна',
  physicalEducation: 'Левіна Наталія Семенівна',
  numericalMethods: 'Ланська Світлана Сергіївна',
  philosophy: 'Шилова Наталія А.',
  oop: 'Гапоненко Наталія Володимирівна',
  differentialEquations: 'Буряк Генадий Иванович',
  computerNetworks: 'Блат Ольга Леонидовна',
  java: 'Антоненко Світлана Валентинівна',
  discreteMathematics: 'Феоктистова Людмила Адамовна',
};

export const TEACHERS_ARRAY = [
  { subject: 'Куратор', name: TEACHERS_LIST.curator },
  { subject: LESSONS.physicalEducation, name: TEACHERS_LIST.physicalEducation },
  {
    subject: LESSONS.computerNetworksOrganization,
    name: TEACHERS_LIST.computerNetworks,
  },
  { subject: LESSONS.numericalMethods, name: TEACHERS_LIST.numericalMethods },
  {
    subject: LESSONS.discreteMathematics,
    name: TEACHERS_LIST.discreteMathematics,
  },
  { subject: LESSONS.basicsOfPhilosophy, name: TEACHERS_LIST.philosophy },
  { subject: LESSONS.visualProgrammingTools, name: TEACHERS_LIST.oop },
  {
    subject: LESSONS.differentialEquations,
    name: TEACHERS_LIST.differentialEquations,
  },
  { subject: 'Java', name: TEACHERS_LIST.java },
];

export const LESSON_NUMBER = {
  1: '08:30 - 09:50',
  2: '10:00 - 11:20',
  3: '11:30 - 12:50',
  4: '13:20 - 14:40',
  5: '14:50 - 16:10',
  firstAtNine: '09:00 - 09:50',
};

export const STUDY_DAYS = {
  MONDAY: 'monday',
  TUESDAY: 'tuesday',
  WEDNESDAY: 'wednesday',
  THURSDAY: 'thursday',
  FRIDAY: 'friday',
};

export const LESSON_DETAILS = {
  physicalEducation: {
    lessonName: LESSONS.physicalEducation,
    link: 'https://meet.google.com/vmd-ekaa-qrh',
  },
  computerNetworksOrganization: {
    lessonName: LESSONS.computerNetworksOrganization,
    link: 'https://meet.google.com/csv-aqog-zsu',
  },
  visualProgrammingTools: {
    lessonName: LESSONS.visualProgrammingTools,
    link: 'https://meet.google.com/vak-amkg-nyt',
  },
  numericalMethods: {
    lessonName: LESSONS.numericalMethods,
    link: 'https://meet.google.com/wvv-hpzu-ugu',
  },
  discreteMathematics: {
    lessonName: LESSONS.discreteMathematics,
    link: 'https://meet.google.com/ano-xcmt-bbd',
  },
  basicsOfPhilosophy: {
    lessonName: LESSONS.basicsOfPhilosophy,
    link: null,
  },
  softwareDesign: {
    lessonName: LESSONS.softwareDesign,
    link: 'https://meet.google.com/hug-seik-dbv',
  },
  differentialEquations: {
    lessonName: LESSONS.differentialEquations,
    link: null, //TODO посилання на четверг та п'ятницю
  },
};

export const CLASSES_SCHEDULE = {
  [STUDY_DAYS.MONDAY]: {
    [LESSON_NUMBER[1]]: LESSON_DETAILS.physicalEducation,
    [LESSON_NUMBER[2]]: LESSON_DETAILS.visualProgrammingTools,
    [LESSON_NUMBER[3]]: LESSON_DETAILS.computerNetworksOrganization,
    [LESSON_NUMBER[4]]: LESSON_DETAILS.softwareDesign,
  },
  [STUDY_DAYS.TUESDAY]: {
    [LESSON_NUMBER[1]]: isNowNumeratorWeek()
      ? LESSON_DETAILS.numericalMethods
      : null,
    [LESSON_NUMBER[2]]: LESSON_DETAILS.discreteMathematics,
    [LESSON_NUMBER[3]]: LESSON_DETAILS.visualProgrammingTools,
    [LESSON_NUMBER[4]]: isNowNumeratorWeek()
      ? null
      : LESSON_DETAILS.basicsOfPhilosophy,
  },
  [STUDY_DAYS.WEDNESDAY]: {
    [LESSON_NUMBER[1]]: null,
    [LESSON_NUMBER[2]]: LESSON_DETAILS.discreteMathematics,
    [LESSON_NUMBER[3]]: LESSON_DETAILS.physicalEducation,
    [LESSON_NUMBER[4]]: LESSON_DETAILS.softwareDesign,
  },
  [STUDY_DAYS.THURSDAY]: {
    [isNowNumeratorWeek() && LESSON_DETAILS.discreteMathematics
      ? LESSON_NUMBER.firstAtNine
      : LESSON_NUMBER[1]]: isNowNumeratorWeek()
      ? LESSON_DETAILS.discreteMathematics
      : LESSON_DETAILS.visualProgrammingTools, // если дискретная первая пара, то она начинается в 9
    [LESSON_NUMBER[2]]: LESSON_DETAILS.differentialEquations,
    [LESSON_NUMBER[3]]: LESSON_DETAILS.computerNetworksOrganization,
  },
  [STUDY_DAYS.FRIDAY]: {
    [LESSON_NUMBER[1]]: LESSON_DETAILS.differentialEquations,
    [LESSON_NUMBER[2]]: LESSON_DETAILS.basicsOfPhilosophy,
    [LESSON_NUMBER[3]]: LESSON_DETAILS.numericalMethods,
  },
};

export const SCHEDULE_COMMANDS = {
  TODAY: 'today',
  TOMORROW: 'tomorrow',
  ...STUDY_DAYS,
};
