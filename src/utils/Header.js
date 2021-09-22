import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import IndeterminateCheckBoxOutlinedIcon from "@mui/icons-material/IndeterminateCheckBoxOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import React from "react";

const Header = (props) => {
  const {
    headerTitle,
    hidePresent,
    hideValue,
    helpPresent,
    editPresent,
    onHideClick,
    onEditHandler,
  } = props;
  return (
    <div style={{ color: "#b83efa" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ padding: 5, fontWeight: "bold" }}>{headerTitle}</div>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {helpPresent && (
            <div
              style={{
                padding: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                textDecoration: "underline",
                cursor: "pointer",
              }}>
              <HelpOutlineIcon />
              <span style={{ color: "#3e3e3e" }}>Help</span>
            </div>
          )}
          {hidePresent && (
            <div
              style={{
                padding: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={onHideClick}>
              {hideValue ? (
                <IndeterminateCheckBoxOutlinedIcon />
              ) : (
                <AddBoxOutlinedIcon />
              )}
              <span style={{ color: "#3e3e3e" }}>
                {hideValue ? "Hide" : "Show"}
              </span>
            </div>
          )}
          {editPresent && (
            <div
              style={{
                padding: 5,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                textDecoration: "underline",
                cursor: "pointer",
              }}
              onClick={onEditHandler}>
              <AddBoxOutlinedIcon />
              <span style={{ color: "#3e3e3e" }}>Edit</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
