import React, { useState, useEffect } from "react";
import Header from "../utils/Header";


const PickupNotifications = (props) => {
  

  return (
    <div style={{ border: "2px solid #3e3e3e", backgroundColor: "#efefef" }}>
      <Header headerTitle={"Pickup Notifications(optional)"} helpPresent={true} editPresent={true}/>
      <div
        style={{
          padding: "15px 5px",
          fontSize: 14,
          borderTop: "3px solid #b83efa",
          margin: 0,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}>
        Receive pickup request confirmation e-mail.
      </div>
    </div>
  );
};

export default PickupNotifications;

