import React from "react";

const DynamicSelect = (props) => {
  const {
    options,
    selectTitle,
    optionSelected,
    setOptionSelected,
    onChangeUser,
    id,
  } = props;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
      }}>
      <label style={{ display: "block", width: 180 }} htmlFor={id}>
        {selectTitle}
      </label>
      <select
        style={{
          display: "block",
          width: 200,
          height: 30,
          paddingLeft: 5,
          borderRadius: 5,
        }}
        onChange={onChangeUser}
        value={optionSelected}
        id={id}>
        {options &&
          options.length > 0 &&
          options.map((option, index) => {
            if (option)
              return (
                <option key={option.id} value={option.id}>
                  {option.name}
                </option>
              );
            else return <option key={`indexNull`} value={""}></option>;
          })}
      </select>
    </div>
  );
};

export default DynamicSelect;
