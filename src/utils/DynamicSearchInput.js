import React from "react";
import { dummyCompany } from "../assets/constants";

function DynamicSearchInput(props) {
  const {
    inputTitle,
    inputValue,
    setInput,
    id,
    type,
    isRequired,
    width,
    inputProps,
    height,
  } = props;

  const handeChange = (e) => {
    setInput(e.target.value);
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
        type={type}
        style={{
          paddingLeft: 5,
          display: "block",
          width: `${width ? width : "200px"}`,
          height: `${height ? height : "25px"}`,
          borderRadius: 3,
        }}
        onChange={handeChange}
        value={inputValue}
        {...inputProps}
        id={id}
        list="cars"
      />
      <datalist id="cars">
        {dummyCompany.map((item) => (
          <option key={item} value={item} />
        ))}
      </datalist>
    </div>
  );
}

export default DynamicSearchInput;
