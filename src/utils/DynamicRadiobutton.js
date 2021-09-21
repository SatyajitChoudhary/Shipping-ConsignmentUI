import React,{useEffect} from "react";

export default function DynamicRadiobutton(props) {
  const { radiobuttonTitle, radiobuttonChecked, radiobuttonOptions, inputProps,handleOnChange,id,width,isRequired } =
    props;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}>
      <label
        style={{
          display: `${radiobuttonTitle ? "block" : "none"}`,
          width: `${width ? width : "180px"}`,
        }}>
        {radiobuttonTitle}
      </label>
      <div style={{ display: "flex",  width: "50%" }}>
        {radiobuttonOptions.map((options, index) => {
          return (
            <div key={index} style={{ width: 180,display:'flex',alignItems:'center',justifyContent: "space-evenly" }}>
              <input
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 3,
                  paddingRight: 5,
                  display: "block",
                }}
                type="radio"
                id={`custom-radiobutton-${index}`}
                name={id}
                value={options}
                checked={radiobuttonChecked===options}
                onChange={() => handleOnChange(options)}
                {...inputProps}
                required={isRequired}
              />
              <label
                style={{ display: "block", width: 140 }}
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
