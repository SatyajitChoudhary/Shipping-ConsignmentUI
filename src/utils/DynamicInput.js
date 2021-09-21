import React from "react";

const DynamicInput = (props) => {
  const { inputTitle, inputValue, setInput, id, type, isRequired, width,inputProps,height } =
    props;

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-start",
        marginBottom:10
      }}>
      <label
        style={{ display: "block", width: 180 }}
        htmlFor={id}>
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
        onChange={(e) => setInput(e.target.value)}
        value={inputValue}
        {...inputProps}
        id={id}
      />
    </div>
  );
};

export default DynamicInput;
