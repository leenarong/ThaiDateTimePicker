import React, { useState, useEffect } from "react";
import DatePicker from "./components/datepicker/";
import TimePicker from "./components/timepicker/";
import DateTimePicker from "./components/datetimepicker/";

function App() {
  const [date1, setDate1] = useState();
  const [date2, setDate2] = useState();
  const [date3, setDate3] = useState();
  const [date4, setDate4] = useState();
  const [date5, setDate5] = useState();
  const [date6, setDate6] = useState();
  
  const [time1, setTime1] = useState();
  const [time2, setTime2] = useState();
  const [time3, setTime3] = useState();
  const [time4, setTime4] = useState();
  const [time5, setTime5] = useState();
  const [time6, setTime6] = useState();

  const [datetime1, setDateTime1] = useState();
  const [datetime2, setDateTime2] = useState();
  const [datetime3, setDateTime3] = useState();
  const [datetime4, setDateTime4] = useState();
  const [datetime5, setDateTime5] = useState();
  const [datetime6, setDateTime6] = useState();

  const getDate = (date, id) => {
    if (id === "date1") { setDate1(date); }
    if (id === "date2") { setDate2(date); }
    if (id === "date3") { setDate3(date); }
    if (id === "date4") { setDate4(date); }
    if (id === "date5") { setDate5(date); }
    if (id === "date6") { setDate6(date); }
  }

  const getTime = (time, id) => {
    if (id === "time1") { setTime1(time); }
    if (id === "time2") { setTime2(time); }
    if (id === "time3") { setTime3(time); }
    if (id === "time4") { setTime4(time); }
    if (id === "time5") { setTime5(time); }
    if (id === "time6") { setTime6(time); }
  }

  const getDateTime = (datetime, id) => {
    if (id === "datetime1") { setDateTime1(datetime); }
    if (id === "datetime2") { setDateTime2(datetime); }
    if (id === "datetime3") { setDateTime3(datetime); }
    if (id === "datetime4") { setDateTime4(datetime); }
    if (id === "datetime5") { setDateTime5(datetime); }
    if (id === "datetime6") { setDateTime6(datetime); }
  }
  
  const getAllDate = () => {
    setDate1("2021-01-01");
    setDate2("2021-02-02");
    setDate3("2021-03-03");
    setDate4("2021-04-04");
    setDate5("2021-05-05");
    setDate6("2021-06-06");
  }

  const getAllTime = () => {
    setTime1("01:01:01");
    setTime2("02:02:02");
    setTime3("03:03:03");
    setTime4("04:04:04");
    setTime5("05:05:05");
    setTime6("06:06:06");
  }
  
  const getAllDateTime = () => {
    setDateTime1("2021-01-01 01:01:01");
    setDateTime2("2021-02-02 02:02:02");
    setDateTime3("2021-03-03 03:03:03");
    setDateTime4("2021-04-04 04:04:04");
    setDateTime5("2021-05-05 05:05:05");
    setDateTime6("2021-06-06 06:06:06");
  }

  useEffect(() => {
    getAllDate();
    getAllTime();
    getAllDateTime();
  }, []);

  const checkDate = () => {
    console.log(date1, date2, date3, date4, date5, date6);
  }

  const checkTime = () => {
    console.log(time1, time2, time3, time4, time5, time6);
  }

  const checkDateTime = () => {
    console.log(datetime1, datetime2, datetime3, datetime4, datetime5, datetime6);
  }

  return (
    <div className="App">
      <DatePicker id="date1" value={date1} getDate={getDate} width="200px" />
      <DatePicker id="date2" value={date2} getDate={getDate} width="200px" locale="en" />
      <DatePicker id="date3" value={date3} getDate={getDate} width="200px" locale="th" />
      <DatePicker id="date4" value={date4} getDate={getDate} label="2012-01 2032-12" min="2012-01-01" max="2032-12-31" />
      <DatePicker id="date5" value={date5} getDate={getDate} label="2012-01 2032-12" min="2012-01-01" max="2032-12-31" locale="en" />
      <DatePicker id="date6" value={date6} getDate={getDate} label="2012-01 2032-12" min="2012-01-01" max="2032-12-31" locale="th" />
      <button onClick={checkDate}>Check Date</button>
      <TimePicker id="time1" value={time1} getTime={getTime} />
      <TimePicker id="time2" value={time2} getTime={getTime} locale="en" />
      <TimePicker id="time3" value={time3} getTime={getTime} locale="th" />
      <TimePicker id="time4" value={time4} getTime={getTime} />
      <TimePicker id="time5" value={time5} getTime={getTime} locale="en" />
      <TimePicker id="time6" value={time6} getTime={getTime} locale="th" />
      <button onClick={checkTime}>Check Time</button>
      <DateTimePicker id="datetime1" value={datetime1} getDateTime={getDateTime} width="200px" />
      <DateTimePicker id="datetime2" value={datetime2} getDateTime={getDateTime} width="200px" locale="en" />
      <DateTimePicker id="datetime3" value={datetime3} getDateTime={getDateTime} width="200px" locale="th" />
      <DateTimePicker id="datetime4" value={datetime4} getDateTime={getDateTime} label="2012-01 2032-12" min="2012-01-01 00:00:00" max="2032-12-31 23:59:59" />
      <DateTimePicker id="datetime5" value={datetime5} getDateTime={getDateTime} label="2012-01 2032-12" min="2012-01-01 00:00:00" max="2032-12-31 23:59:59" locale="en" />
      <DateTimePicker id="datetime6" value={datetime6} getDateTime={getDateTime} label="2012-01 2032-12" min="2012-01-01 00:00:00" max="2032-12-31 23:59:59" locale="th" />
      <button onClick={checkDateTime}>Check Date Time</button>
    </div>
  );
}

export default App;
