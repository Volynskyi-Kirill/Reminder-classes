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

const LESSON_NUMBER = {
  1: '08:30 - 09:50',
  2: '10:00 - 11:20',
  3: '11:30 - 12:50',
  4: '13:20 - 14:40',
  5: '14:50-  16:10',
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
    link: null,
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
    [LESSON_NUMBER[1]]: isNowNumeratorWeek()
      ? LESSON_DETAILS.discreteMathematics
      : LESSON_DETAILS.visualProgrammingTools,
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
