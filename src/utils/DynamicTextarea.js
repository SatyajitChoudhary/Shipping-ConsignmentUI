import React,{useState,useRef} from "react";

const DynamicTextarea = (props) => {
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

  const [focused, setfocused] = useState(false);

  const onFocused = () => {
    setfocused(true);
  };
  const onBlured = () => {
    setfocused(false);
  };

  return (
    <div
      style={{
        display: "flex",
        alignContent: "center",
        justifyContent: "flex-start",
        marginBottom: 10,
      }}>
      <label style={{ display: "block", width: 200 }} htmlFor={id}>
        {inputTitle}
      </label>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "right",
        }}>
        <textarea
          required={isRequired}
          type={type}
          style={{
            padding: 15,
            display: "block",
            width: `${width ? width : "200px"}`,
            height: `${height ? height : "25px"}`,
          }}
          onFocus={onFocused}
          onBlur={onBlured}
          onChange={(e) => setInput(e.target.value)}
          value={inputValue}
          {...inputProps}
          id={id}
          maxLength="250"
        />
        {focused && (
          <div style={{ fontSize: 15, fontWeight: 500, padding: 5 }}>{`${
            250 - inputValue.length
          }/250 characters left`}</div>
        )}
      </div>
    </div>
  );
};

export default DynamicTextarea;
