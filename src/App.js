import { Grid } from "@mui/material";
import React from "react";
import PickupAdrress from "./components/PickupAdrress";
import PickupInformation from "./components/PickupInformation";
import PickupNotifications from "./components/PickupNotifications";
import SchedulePickup from "./components/SchedulePickup";
import ShipmentDetails from "./components/ShipmentDetails";

function App() {
  const [expanded, setExpanded] = React.useState(true);

  const handleHideChange = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      style={{
        flex: 1,
        padding: 20,
        margin: 0,
        border: 0,
        overflow: "hidden",
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
          />
        </Grid>
        <Grid item xs={8}>
          <PickupInformation />
        </Grid>
        <Grid item xs={8}>
          <PickupNotifications />
        </Grid>
        <Grid item xs={8}>
          <ShipmentDetails />
        </Grid>
        <Grid item xs={8}>
          <SchedulePickup />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
