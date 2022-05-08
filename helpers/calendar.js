export const DAY_NAME = {
  en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  th: ["อา.", "จ.", "อ.", "พ.", "พฤ.", "ศ.", "ส."],
};

export const MONTH_NAME = {
  en: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  th: [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ],
};

export const CALENDAR_WEEKS = 6;

export const CALENDAR_MONTHS_30 = [4, 6, 9, 11];

export const isDate = (date) => {
  const isDate = Object.prototype.toString.call(date) === "[object Date]";
  const isValidDate = date && !Number.isNaN(+date);
  return isDate && isValidDate;
};

export const getDateISO = (date = new Date()) => {
  return isDate(date)
    ? [date.getFullYear(), date.getMonth() + 1, date.getDate()]
        .map((v) => String(v).padStart(2, "0"))
        .join("-")
    : null;
};

export const getDateDMY = (date, locale = "en") => {
  if (date === undefined) {
    return "00/00/0000";
  }
  const [year, month, day] = date.split("-");
  return isDate(new Date(+year, month - 1, +day))
    ? locale === "th"
      ? date.substr(0, 10).replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/") +
        Number(parseInt(date.substr(0, 4)) + 543)
      : date.substr(0, 10).replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")
    : "00/00/0000";
};

export const getDateTimeDMY = (date, locale = "en") => {
  if (date === undefined) {
    return "00/00/0000 00:00:00";
  }
  const [dateComponents, timeComponents] = date.split(" ");
  const [year, month, day] = dateComponents.split("-");
  const [hour, minute, second] =
    timeComponents === undefined
      ? "00:00:00".split(":")
      : timeComponents.split(":");
  return isDate(new Date(+year, month - 1, +day, +hour, +minute, +second))
    ? locale === "th"
      ? date.substr(0, 10).replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/") +
        Number(parseInt(date.substr(0, 4)) + 543) +
        date.substr(10, 10)
      : date.substr(0, 10).replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1") +
        date.substr(10, 10)
    : "00/00/0000 00:00:00";
};

export const getDateArray = (date = new Date()) => {
  const [year = null, month = null, day = null] = (getDateISO(date) || "")
    .split("-")
    .map((v) => +v);
  return [year, month, day];
};

export const getMonthDays = (date = new Date()) => {
  const [year, month] = getDateArray(date);
  return month === 2
    ? year % 4 === 0
      ? 29
      : 28
    : CALENDAR_MONTHS_30.includes(month)
    ? 30
    : 31;
};

export const getMonthFirstDay = (date = new Date()) => {
  return new Date(new Date(+date).setDate(1)).getDay() + 1;
};

export const getPrevMonth = (date = new Date()) => {
  const [year, month] = getDateArray(date);
  return {
    month: month > 1 ? month - 1 : 12,
    year: month > 1 ? year : year - 1,
  };
};

export const getNextMonth = (date = new Date()) => {
  const [year, month] = getDateArray(date);
  return {
    month: month < 12 ? month + 1 : 1,
    year: month < 12 ? year : year + 1,
  };
};

export const dateDiff = (date1, date2 = new Date()) => {
  return isDate(date1) && isDate(date2)
    ? new Date(+date1).setHours(0, 0, 0, 0) -
        new Date(+date2).setHours(0, 0, 0, 0)
    : null;
};

export const isBeforeDay = (date1, date2) => +dateDiff(date1, date2) < 0;

export const isAfterDay = (date1, date2) => +dateDiff(date1, date2) > 0;

export const isSameDay = (date1, date2) => dateDiff(date1, date2) === 0;

export const isSameMonth = (date1, date2) => {
  return isDate(date1) && isDate(date2)
    ? new Date(+date1).setDate(1) - new Date(+date2).setDate(1) === 0
    : false;
};

export default (date = new Date()) => {
  const monthDays = getMonthDays(date);
  const monthFirstDay = getMonthFirstDay(date);
  const [year, month] = getDateArray(date);

  const daysFromPrevMonth = monthFirstDay - 1;
  const daysFromNextMonth =
    CALENDAR_WEEKS * 7 - (daysFromPrevMonth + monthDays);

  const { month: prevMonth, year: prevMonthYear } = getPrevMonth(date);
  const { month: nextMonth, year: nextMonthYear } = getNextMonth(date);

  const prevMonthDays = getMonthDays(new Date([prevMonthYear, prevMonth]));

  const prevMonthDates = [...new Array(daysFromPrevMonth)].map((n, index) => [
    prevMonthYear,
    prevMonth,
    index + 1 + (prevMonthDays - daysFromPrevMonth),
  ]);

  const thisMonthDates = [...new Array(monthDays)].map((n, index) => [
    year,
    month,
    index + 1,
  ]);

  const nextMonthDates = [...new Array(daysFromNextMonth)].map((n, index) => [
    nextMonthYear,
    nextMonth,
    index + 1,
  ]);

  return [...prevMonthDates, ...thisMonthDates, ...nextMonthDates];
};
