import React, { useState } from "react";
import {
  DatePickerContainer,
  DatePickerFormGroup,
  DatePickerLabel,
  DatePickerInput,
  DatePickerDropdown,
  DatePickerDropdownToggle,
  DatePickerDropdownMenu,
} from "./styles";
import { getDateISO, getDateDMY } from "../../helpers/calendar";
import Calendar from "../calendar";

const DatePicker = (props) => {
  const [calendarOpen, setCalendarOpen] = useState(false);

  const {
    locale = "en",
    label = locale === "th" ? "ใส่วันที่" : "Enter Date",
    min = "1900-01-01 00:00:00",
    max = "2099-12-31 23:59:59",
  } = props;

  const toggleCalendar = () => {
    setCalendarOpen(!calendarOpen);
  };

  const handleChange = (evt) => evt.preventDefault();

  const handleDateChange = (date) => {
    props.getDate(getDateISO(date), props.id);
    setCalendarOpen(false);
  };

  return (
    <DatePickerContainer>
      <DatePickerFormGroup>
        <DatePickerLabel style={{ width: "9rem" }}>
          {label || "Enter Date"}
        </DatePickerLabel>
        <DatePickerInput
          type="text"
          readOnly="readonly"
          size="10"
          onChange={handleChange}
          value={getDateDMY(props.value, locale)}
        />
      </DatePickerFormGroup>

      <DatePickerDropdown isOpen={calendarOpen} toggle={toggleCalendar}>
        <DatePickerDropdownToggle color="transparent" />
        <DatePickerDropdownMenu>
          {calendarOpen && (
            <Calendar
              value={props.value}
              min={min}
              max={max}
              locale={locale}
              onDateChanged={handleDateChange}
            />
          )}
        </DatePickerDropdownMenu>
      </DatePickerDropdown>
    </DatePickerContainer>
  );
};

export default DatePicker;
