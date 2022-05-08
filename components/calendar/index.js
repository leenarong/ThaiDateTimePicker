import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  ArrowRight,
  CalendarContainer,
  CalendarHeader,
  CalendarGrid,
  Today,
  CalendarDay,
  CalendarDate,
  CalendarMonth,
  HighlightedCalendarDate,
  TodayCalendarDate,
} from "./styles";
import calendar, {
  isDate,
  isBeforeDay,
  isAfterDay,
  isSameDay,
  isSameMonth,
  getDateISO,
  getDateArray,
  getNextMonth,
  getPrevMonth,
  getMonthDays,
  DAY_NAME,
  MONTH_NAME,
} from "../../helpers/calendar";

const Calendar = (props) => {
  const today = new Date();
  const mindate = new Date(props.min);
  const maxdate = new Date(props.max);
  const [curr, setCurr] = useState(today);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const setCalendarValue = (value) => {
    if (value === undefined) {
      setCurr(today);
      setMonth(today.getMonth() + 1);
      setYear(today.getFullYear());
    } else {
      setCurr(new Date(value));
      setMonth(+value.split("-")[1]);
      setYear(+value.split("-")[0]);
    }
    if (props.id !== undefined) {
      const [hour, minute, second] = value.split(" ")[1].split(":");
      document.getElementById(props.id + "_Hour").value = hour;
      document.getElementById(props.id + "_Minute").value = minute;
      document.getElementById(props.id + "_Second").value = second;
    }
  };

  useEffect(() => {
    setCalendarValue(props.value);
  }, [props]);

  const calendarWithinRange = (date) => {
    if (!isDate(date)) return false;
    const min = new Date(new Date(+mindate).setDate(1)).setHours(0, 0, 0, 0);
    const max = new Date(
      new Date(+maxdate).setDate(getMonthDays(maxdate))
    ).setHours(23, 59, 59, 999);
    return (date >= min || !mindate) && (date <= max || !maxdate);
  };

  const getCalendarDates = () => {
    const [currYear, currMonth] = curr ? getDateArray(curr) : [];
    return calendar(new Date([year || currYear, month || currMonth]));
  };

  const gotoDate = (date) => () => {
    const isCurr = curr && isSameDay(date, curr);
    const outOfRange = isBeforeDay(date, mindate) || isAfterDay(date, maxdate);
    !(isCurr || outOfRange) && setCurr(date);
    !(isCurr || outOfRange) && props.onDateChanged(date);
  };

  const gotoPrevMonth = () => {
    const prevMonth = getPrevMonth(new Date([year, month]));
    const prev = new Date([prevMonth.year, prevMonth.month]);
    if (prevMonth.month === 12) {
      calendarWithinRange(prev) && setYear(prevMonth.year);
    }
    calendarWithinRange(prev) && setMonth(prevMonth.month);
  };

  const gotoNextMonth = () => {
    const nextMonth = getNextMonth(new Date([year, month]));
    const next = new Date([nextMonth.year, nextMonth.month]);
    if (nextMonth.month === 1) {
      calendarWithinRange(next) && setYear(nextMonth.year);
    }
    calendarWithinRange(next) && setMonth(nextMonth.month);
  };

  const gotoToday = () => {
    const Today = getNextMonth(
      new Date([today.getFullYear(), today.getMonth()])
    );
    setYear(Today.year);
    calendarWithinRange(today) && setMonth(Today.month);
  };

  const gotoPrevYear = () => {
    const prev = new Date([year - 1, month]);
    calendarWithinRange(prev) && setYear(year - 1);
  };

  const gotoNextYear = () => {
    const next = new Date([year + 1, month]);
    calendarWithinRange(next) && setYear(year + 1);
  };

  const handlePrev = (evt) => {
    evt.shiftKey ? gotoPrevYear() : gotoPrevMonth();
  };

  const handleNext = (evt) => {
    evt.shiftKey ? gotoNextYear() : gotoNextMonth();
  };

  const renderMonthAndYear = () => {
    return (
      <CalendarHeader>
        <ArrowLeft onMouseDown={handlePrev} />
        <CalendarMonth>
          <Today onClick={gotoToday}>
            {props.locale === "th" ? `วันนี้` : `Today`}
          </Today>
          {MONTH_NAME[props.locale][month - 1]}{" "}
          {props.locale === "th" ? year + 543 : year}
        </CalendarMonth>
        <ArrowRight onMouseDown={handleNext} />
      </CalendarHeader>
    );
  };

  const renderDayLabels = (day, index) => {
    return (
      <CalendarDay key={day} index={index}>
        {day}
      </CalendarDay>
    );
  };

  const renderCalendarDate = (date, index) => {
    const thisDay = new Date(date);
    const monthFirstDay = new Date([year, month]);

    const isToday = !!today && isSameDay(thisDay, today);
    const isCurr = !!curr && isSameDay(thisDay, curr);
    const inMonth = !!(month && year) && isSameMonth(thisDay, monthFirstDay);
    const inRange = !(
      isBeforeDay(thisDay, mindate) || isAfterDay(thisDay, maxdate)
    );

    const props = {
      index,
      inMonth,
      inRange,
      onClick: gotoDate(thisDay),
      title: thisDay.toDateString(),
    };

    const DateComponent = isCurr
      ? HighlightedCalendarDate
      : isToday
      ? TodayCalendarDate
      : CalendarDate;

    return (
      <DateComponent key={getDateISO(thisDay)} {...props}>
        {thisDay.getDate()}
      </DateComponent>
    );
  };

  return (
    <CalendarContainer
      style={{
        position: "relative",
        zIndex: "1",
      }}
    >
      {renderMonthAndYear()}
      <CalendarGrid>
        <>{DAY_NAME[props.locale].map(renderDayLabels)}</>
        <>{getCalendarDates().map(renderCalendarDate)}</>
      </CalendarGrid>
    </CalendarContainer>
  );
};

export default Calendar;
