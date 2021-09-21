import { Grid } from "@mui/material";
import React, { useState, useEffect, useMemo } from "react";
import Header from "../utils/Header";
import DynamicInput from "../utils/DynamicInput";
import DynamicCheckbox from "../utils/DynamicCheckbox";
import moment from "moment";
import DynamicRadiobutton from "../utils/DynamicRadiobutton";
import { specialServices } from "../assets/constants";
import DynamicTextarea from "../utils/DynamicTextarea";
import DynamicTimeInput from "../utils/DynamicTimeInput";

const PickupInformation = (props) => {
  const [editMode, seteditMode] = useState(true);

  const onEditClick = () => {
    seteditMode(!editMode);
  };

  const minDate = useMemo(() => moment().format("YYYY-MM-DD"), []);
  const [pickupDate, setpickupDate] = useState(minDate);

  const [readyTime, setReadyTime] = useState("");
  const [closeTime, setCloseTime] = useState("");


  const [pickupContact, setpickupContact] = useState("");

  const [specialServicesState, setSpecialServices] = useState([]);
  const handleOnSpecialServicesChange = (position) => {
    const updatedCheckedState = specialServicesState.map((item, index) =>
      index === position ? !item : item
    );

    setSpecialServices(updatedCheckedState);
  };

  const [specialInstructions, setspecialInstructions] = useState("")

  return (
    <div style={{ border: "2px solid #b83efa", backgroundColor: "#efefef" }}>
      <Header
        headerTitle={"Pickup Information"}
        helpPresent={true}
        editPresent={!editMode}
        onEditHandler={onEditClick}
      />
      <div
        style={{
          padding: 10,
          fontSize: 14,
          borderTop: "3px solid #b83efa",
          margin: 0,
        }}>
        <Grid
          container
          direction="row"
          alignItems="stretch"
          justifyContent="flex-start"
          spacing={4}>
          <Grid item xs={5}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}>
              <DynamicInput
                inputTitle={"*Pickup date "}
                inputValue={pickupDate}
                setInput={setpickupDate}
                id={"Pickup date"}
                type={"date"}
                isRequired={true}
                inputProps={{ min: minDate }}
              />
              <DynamicTimeInput
                inputTitle={"*Ready time"}
                time={readyTime}
                setTime={setReadyTime}
                id={"Ready time"}
                dateStart={moment("00:00","hh:mm")}
                isRequired={true}
              />
              <DynamicTimeInput
                inputTitle={"*Close time"}
                time={closeTime}
                setTime={setCloseTime}
                id={"Close time"}
                dateStart={moment(readyTime,"hh:mm").add(30,'m')}
                isRequired={true}
              />
              <DynamicRadiobutton
                radiobuttonTitle={"*Pickup contact"}
                radiobuttonChecked={pickupContact}
                radiobuttonOptions={["Same as requested by", "Other contact"]}
                handleOnChange={setpickupContact}
                id={"Pickup Contact"}
                isRequired={true}
              />
            </div>
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={6}>
            <div style={{display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "flex-start",}}>
              <DynamicCheckbox
                checkBoxTitle={"Special services"}
                checkboxOptions={specialServices}
                checkedState={specialServicesState}
                setCheckState={setSpecialServices}
                handleOnChange={handleOnSpecialServicesChange}
              />
              <DynamicTextarea inputTitle={"Special instructions"}
                inputValue={specialInstructions}
                setInput={setspecialInstructions}
                id={"Special instructions"}
                type={"textarea"}
                isRequired={false}
                height={"100px"}
                width={"300px"}
                />
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default PickupInformation;
