import React,{ useState,useEffect } from "react";
import moment from 'moment'

export default function DynamicTimeInput(props) {
  const { time, setTime } = props;
  const { inputTitle, id, isRequired, width,height,dateStart } =
    props;

  const handeChange = (e) => {
    setTime(e.target.value);
  };

  const cleanInp = () => {
    setTime("");
  };

  const [value, setvalue] = useState([])

  useEffect(() => {
      getAll(dateStart)
  }, [dateStart])

  const getAll = (dateStart) => {
    // let [hh, mm] = dateStart.split(":");
    let hh = dateStart.hour()
    let mm = dateStart.minute()
    let vales = [];
    console.log("Oila",hh,mm,dateStart)

    for (let i = hh; i < 24; i++) {
      for (let j = 0; j < 60; j += 15) {
        if ((i == hh && j >= mm) || i !== hh)
          vales.push(
            `${String("0" + i).slice(-2)}:${String("0" + j).slice(-2)}`
          );
      }
    }
    // console.log("Value",vales)
    setvalue(vales);
  };

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-start",
        marginBottom: 10,
      }}>
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
        onFocus={cleanInp}
        value={time}
        onChange={handeChange}
        list="cars"
        id={id}
      />
      {console.log("Logging",value)}
      <datalist id="cars">
        {value.map((item) => {
            if(moment(dateStart,"hh:mm").isBefore(moment(item,"hh:mm")))
                return (<option key={item} value={item} />)
            else
                return null
        })}
      </datalist>
    </div>
  );
}
