import React, { useState, useEffect } from "react";
import {
  DatePickerContainer,
  DatePickerFormGroup,
  DatePickerLabel,
  DatePickerInput,
  DatePickerDropdown,
  DatePickerDropdownToggle,
  DatePickerDropdownMenu,
  TimeContainer,
  TimePickerLabel,
  HourSelect,
  MinuteSelect,
  SecondSelect,
} from "./styles";
import { getDateISO, getDateTimeDMY } from "../../helpers/calendar";
import Calendar from "../calendar";

const DateTimePicker = (props) => {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const {
    locale = "en",
    label = locale === "th" ? "ใส่วันที่ เวลา" : "Enter Date Time",
    min = "1900-01-01 00:00:00",
    max = "2099-12-31 23:59:59",
  } = props;

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  const handleChange = (evt) => evt.preventDefault();

  const handleDateTimeChange = (date) => {
    const datetime =
      getDateISO(date) +
      " " +
      document.getElementById(props.id + "_Hour").value +
      ":" +
      document.getElementById(props.id + "_Minute").value +
      ":" +
      document.getElementById(props.id + "_Second").value;
    props.getDateTime(datetime, props.id);
    setCalendarOpen(false);
  };

  const options_24 = [];
  for (let i = 0; i < 24; i++) {
    options_24.push(i < 10 ? "0" + i : i);
  }
  const options_60 = [];
  for (let i = 0; i < 60; i++) {
    options_60.push(i < 10 ? "0" + i : i);
  }

  return (
    <DatePickerContainer>
      <DatePickerFormGroup>
        <DatePickerLabel style={{ width: "9rem" }}>
          {label || "Enter Date"}
        </DatePickerLabel>
        <DatePickerInput
          type="text"
          readOnly="readonly"
          size="18"
          onChange={handleChange}
          value={getDateTimeDMY(props.value, locale)}
        />
      </DatePickerFormGroup>

      <DatePickerDropdown isOpen={calendarOpen} toggle={toggleCalendar}>
        <DatePickerDropdownToggle color="transparent" />
        <DatePickerDropdownMenu>
          {calendarOpen && (
            <Calendar
              value={props.value}
              id={props.id}
              min={min}
              max={max}
              locale={locale}
              onDateChanged={handleDateTimeChange}
            />
          )}

          <TimeContainer>
            {calendarOpen && (
              <TimePickerLabel>
                {locale === "th" ? "เวลา" : "Time"}
              </TimePickerLabel>
            )}
            {calendarOpen && (
              <HourSelect
                id={props.id + "_Hour"}
                // onChange={handleDateTimeChange}
              >
                {options_24.map((element, index) => (
                  <option key={index}>{element}</option>
                ))}
              </HourSelect>
            )}
            {calendarOpen && (
              <MinuteSelect
                id={props.id + "_Minute"}
                // onChange={handleDateTimeChange}
              >
                {options_60.map((element, index) => (
                  <option key={index}>{element}</option>
                ))}
              </MinuteSelect>
            )}
            {calendarOpen && (
              <SecondSelect
                id={props.id + "_Second"}
                // onChange={handleDateTimeChange}
              >
                {options_60.map((element, index) => (
                  <option key={index}>{element}</option>
                ))}
              </SecondSelect>
            )}
          </TimeContainer>
        </DatePickerDropdownMenu>
      </DatePickerDropdown>
    </DatePickerContainer>
  );
};

export default DateTimePicker;
