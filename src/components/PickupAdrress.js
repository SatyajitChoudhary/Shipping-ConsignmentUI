import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../utils/Header";
import DynamicSelect from "../utils/DynamicSelect";
import { countries } from "../assets/country";
import { state as StateData } from "../assets/state";
import DynamicInput from "../utils/DynamicInput";
import DynamicCheckbox from "../utils/DynamicCheckbox";
import DynamicSearchInput from "../utils/DynamicSearchInput";

const PickupAdrress = (props) => {
  const { expanded, setExpanded, handleHideChange } = props;

  const [firstClosed, setfirstClose] = useState(false);

  const [optionSelected, setOptionSelected] = useState("");
  const onChangeCountry = (event) => {
    setOptionSelected(event.target.value);
  };

  const [city, setCity] = useState("");
  const [company, setCompany] = useState("");

  const [stateOptions, setstateOptions] = useState(() =>
    StateData.filter((states) => states.countryId == 0)
  );
  const [state, setState] = useState("");
  useEffect(() => {
    if (optionSelected) {
      let selectedState = StateData.filter((states, index) => {
        return states.countryId == optionSelected;
      });
      if (selectedState && selectedState.length) {
        setstateOptions(selectedState);
        setState(selectedState[0]);
      }
    } else {
      setstateOptions([]);
    }
  }, [optionSelected]);
  const onChangeState = (event) => {
    setState(event.target.value);
  };

  const [contactName, setContactName] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneExt, setPhoneExt] = useState("");

  const [isResidence, setResidence] = useState([false]);
  const handleOnResidenceChange = (position) => {
    const updatedCheckedState = isResidence.map((item, index) =>
      index === position ? !item : item
    );
    if (updatedCheckedState[0]) setAddress2(address1);
    setResidence(updatedCheckedState);
  };

  //Validation for all fields
  const onBlurHandler = () => {
    if (!firstClosed) {
      if (
        optionSelected &&
        city &&
        city.length &&
        company &&
        company.length &&
        state &&
        state.name &&
        state.name.length &&
        contactName &&
        contactName.length &&
        postalCode &&
        postalCode.toString().length &&
        address1 &&
        address1.length &&
        phone &&
        phone.toString().length
      ) {
        setExpanded(false);
        setfirstClose(true);
      }
    }
  };

  return (
    <div style={{ border: "2px solid #b83efa", backgroundColor: "#efefef" }}>
      <Header
        headerTitle={"Pickup Address"}
        helpPresent={true}
        hidePresent={true}
        hideValue={expanded}
        onHideClick={handleHideChange}
      />
      {expanded && (
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
            alignItems="center"
            justifyContent="flex-start"
            spacing={4}
            onBlur={onBlurHandler}>
            <Grid item xs={5}>
              <DynamicSelect
                options={countries}
                selectTitle={"*Country/Territory "}
                optionSelected={optionSelected}
                setOptionSelected={setOptionSelected}
                onChangeUser={onChangeCountry}
                id={"country"}
              />
            </Grid>
            <Grid item xs={5}>
              <DynamicInput
                inputTitle={"*City "}
                inputValue={city}
                setInput={setCity}
                id={"City"}
                type={"text"}
                isRequired={true}
              />
            </Grid>

            <Grid item xs={5}>
              <DynamicSearchInput
                inputTitle={"*Company "}
                inputValue={company}
                setInput={setCompany}
                id={"Company"}
                type={"text"}
                isRequired={true}
              />
            </Grid>
            <Grid item xs={5}>
              <DynamicSelect
                options={stateOptions}
                selectTitle={"*State "}
                optionSelected={state}
                setOptionSelected={setState}
                onChangeUser={onChangeState}
                id={"State"}
              />
            </Grid>

            <Grid item xs={5}>
              <DynamicInput
                inputTitle={"*Contact name "}
                inputValue={contactName}
                setInput={setContactName}
                id={"Contact Name"}
                type={"text"}
                isRequired={true}
              />
            </Grid>
            <Grid item xs={5}>
              <DynamicInput
                inputTitle={"*ZIP/Postal code "}
                inputValue={postalCode}
                setInput={setPostalCode}
                id={"Postal Code"}
                type={"number"}
                isRequired={true}
                width={"150px"}
              />
            </Grid>

            <Grid item xs={5}>
              <DynamicInput
                inputTitle={"*Address 1 "}
                inputValue={address1}
                setInput={setAddress1}
                id={"Address1"}
                type={"text"}
                isRequired={true}
              />
            </Grid>
            <Grid item xs={4}>
              <DynamicInput
                inputTitle={"*Phone no. "}
                inputValue={phone}
                setInput={setPhone}
                id={"Phone no."}
                type={"number"}
                isRequired={true}
                width={"150px"}
              />
            </Grid>
            <Grid item xs={1}>
              <DynamicInput
                inputTitle={"ext."}
                inputValue={phoneExt}
                setInput={setPhoneExt}
                id={"Phone no. ext"}
                type={"number"}
                isRequired={false}
                width={"40px"}
              />
            </Grid>

            <Grid item xs={10}>
              <DynamicInput
                inputTitle={"Address2 "}
                inputValue={address2}
                setInput={setAddress2}
                id={"Address2"}
                type={"text"}
                isRequired={false}
              />
            </Grid>
            <Grid item xs={10}>
              <DynamicCheckbox
                checkBoxTitle={null}
                checkboxOptions={["This is a residence"]}
                handleOnChange={handleOnResidenceChange}
                checkedState={isResidence}
                setCheckState={setResidence}
              />
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default PickupAdrress;
