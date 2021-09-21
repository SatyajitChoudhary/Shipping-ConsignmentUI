import React, { useEffect } from "react";

export default function DynamicCheckbox(props) {
  const {
    checkBoxTitle,
    checkboxOptions,
    checkedState,
    setCheckState,
    width,
    handleOnChange,
  } = props;

  useEffect(() => {
    setCheckState(new Array(checkboxOptions.length).fill(false));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        marginBottom:10
      }}>
      <label
        style={{
          display: `${checkBoxTitle ? "block" : "none"}`,
          width: `${width ? width : "300px"}`,
        }}>
        {checkBoxTitle}
      </label>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-end",
          alignItems: "center",
        }}>
        {checkboxOptions.map((options, index) => {
          return (
            <div
              key={index}
              style={{
                width: 250,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}>
              <input
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 3,
                  paddingRight: 5,
                  display: "block",
                }}
                type="checkbox"
                id={`custom-checkbox-${index}`}
                name={options}
                value={options}
                checked={checkedState[index]}
                onChange={() => handleOnChange(index)}
              />
              <label
                style={{ display: "block", width: 200 }}
                htmlFor={`custom-checkbox-${index}`}>
                {options}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}
