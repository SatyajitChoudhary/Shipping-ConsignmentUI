import React, { useState, useEffect } from "react";

export default function DynamicTimeInput(props) {
  const { time, setTime } = props;
  const { inputTitle, id, isRequired, width, height, dateStart,readOnly } = props;
  const hh = dateStart.hour();
  const mm = dateStart.minute();
  const [value, setvalue] = useState([]);

  const handeChange = (e) => {
    setTime(e.target.value);
  };

  const cleanInp = () => {
    setTime("");
  };

  useEffect(() => {
    getAll(dateStart);
  }, [dateStart]);

  const getAll = () => {
    let vales = [];

    for (let i = hh; i < 24; i++) {
      for (let j = 0; j < 60; j += 15) {
        if ((i == hh && j >= mm) || i !== hh)
          vales.push(
            `${String("0" + i).slice(-2)}:${String("0" + j).slice(-2)}`
          );
      }
    }
    setvalue(vales);
  };

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-start",
        marginBottom: 10,
      }}
    >
      <label style={{ display: "block", width: 180 }} htmlFor={id}>
        {inputTitle}
      </label>
      <input
        required={isRequired}
        style={{
          paddingLeft: 5,
          display: "block",
          width: `${width ? width : "200px"}`,
          height: `${height ? height : "25px"}`,
          borderRadius: 3,
        }}
        readOnly={readOnly?readOnly:false}
        onFocus={cleanInp}
        value={time}
        onChange={handeChange}
        list={`time-${hh}:${mm}`}
        id={id}
      />
      <datalist id={`time-${hh}:${mm}`}>
        {value.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>
    </div>
  );
}