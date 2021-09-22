import { Grid } from "@mui/material";
import React, { useState } from "react";
import PickupAdrress from "./components/PickupAdrress";
import PickupInformation from "./components/PickupInformation";
import PickupNotifications from "./components/PickupNotifications";
import SchedulePickup from "./components/SchedulePickup";
import ShipmentDetails from "./components/ShipmentDetails";

function App() {
  const [expanded, setExpanded] = useState(true);
  const [editMode, seteditMode] = useState(true);

  const handleHideChange = () => {
    setExpanded(!expanded);
  };

  const [rowData, setrowData] = useState([]);
  const [gridApi, setGridApi] = useState(null);
  const [enablePickup, setenablePickup] = useState(false);

  return (
    <div
      style={{
        flex: 1,
        padding: 20,
        margin: 0,
        border: 0,
        // overflow: "hidden",
      }}>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="stretch"
        spacing={2}>
        <Grid item xs={8}>
          <PickupAdrress
            expanded={expanded}
            handleHideChange={handleHideChange}
            setExpanded={setExpanded}
          />
        </Grid>
        {!expanded && (
          <>
            <Grid item xs={8}>
              <PickupInformation
                editMode={editMode}
                seteditMode={seteditMode}
              />
            </Grid>
            {!editMode && (
              <>
                <Grid item xs={8}>
                  <PickupNotifications />
                </Grid>
                <Grid item xs={8}>
                  <ShipmentDetails
                    rowData={rowData}
                    setRowData={setrowData}
                    enablePickup={enablePickup}
                    setenablePickup={setenablePickup}
                    gridApi={gridApi}
                    setGridApi={setGridApi}
                  />
                </Grid>
                <Grid item xs={8}>
                  <SchedulePickup
                    enablePickup={enablePickup}
                    gridApi={gridApi}
                    setGridApi={setGridApi}
                  />
                </Grid>
              </>
            )}
          </>
        )}
      </Grid>
    </div>
  );
}

export default App;
