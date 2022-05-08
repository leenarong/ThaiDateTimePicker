import React, { useEffect } from "react";
import {
  TimePickerContainer,
  TimePickerFormGroup,
  TimePickerLabel,
  HourSelect,
  MinuteSelect,
  SecondSelect,
} from "./styles";

const TimePicker = (props) => {
  const { locale = "en", label = locale === "th" ? "ใส่เวลา" : "Enter Time" } =
    props;

  useEffect(() => {
    if (props.value === undefined) {
      document.getElementById(props.id + "_Hour").value = 0;
      document.getElementById(props.id + "_Minute").value = 0;
      document.getElementById(props.id + "_Second").value = 0;
    } else {
      const [hour, minute, second] = props.value.split(":");
      document.getElementById(props.id + "_Hour").value = hour;
      document.getElementById(props.id + "_Minute").value = minute;
      document.getElementById(props.id + "_Second").value = second;
    }
  }, [props]);

  const handleTimeChange = () => {
    const hour = document.getElementById(props.id + "_Hour").value;
    const minute = document.getElementById(props.id + "_Minute").value;
    const second = document.getElementById(props.id + "_Second").value;
    const time = hour + ":" + minute + ":" + second;
    props.getTime(time, props.id);
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
    <TimePickerContainer>
      <TimePickerFormGroup>
        <TimePickerLabel style={{ width: "9rem" }}>
          {label || "Enter Time"}
        </TimePickerLabel>
        <HourSelect id={props.id + "_Hour"} onChange={handleTimeChange}>
          {options_24.map((element, index) => (
            <option key={index}>{element}</option>
          ))}
        </HourSelect>
        <MinuteSelect id={props.id + "_Minute"} onChange={handleTimeChange}>
          {options_60.map((element, index) => (
            <option key={index}>{element}</option>
          ))}
        </MinuteSelect>
        <SecondSelect id={props.id + "_Second"} onChange={handleTimeChange}>
          {options_60.map((element, index) => (
            <option key={index}>{element}</option>
          ))}
        </SecondSelect>
      </TimePickerFormGroup>
    </TimePickerContainer>
  );
};

export default TimePicker;
