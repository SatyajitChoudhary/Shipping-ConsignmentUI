import { Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../utils/Header";
import DynamicSelect from "../utils/DynamicSelect";
import { countries } from "../assets/country";
import { state as StateData } from "../assets/state";
import DynamicInput from "../utils/DynamicInput";
import DynamicCheckbox from "../utils/DynamicCheckbox";
import {AgGridColumn, AgGridReact} from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import ShipmentTable from "./ShipmentTable";
import { grid } from "@mui/system";

const ShipmentDetails = (props) => {
  const [gridApi, setGridApi] = useState(null);
  const deleteRowHandler = () => {
      const selectedRows = gridApi.getSelectedRows()
      gridApi.applyTransaction({remove:selectedRows})
  }  
  const addRowHandler = () => {
    gridApi.applyTransaction({add:[{ }]})
} 
  return (
    <div style={{ border: "2px solid #b83efa", backgroundColor: "#efefef" }}>
      <Header headerTitle={"Shipment Details"} helpPresent={true} />
      <div
        style={{
          padding: '15px 5px',
          fontSize: 14,
          borderTop: "3px solid #b83efa",
          margin: 0,
          display:"flex",
          flexDirection:"column",
          justifyContent: "space-between",
        }}>
            <ShipmentTable gridApi={gridApi} setGridApi={setGridApi}/>
            <div style={{display:"flex",justifyContent:"flex-end",alignItems:"flex-end",padding:10}}>
                <button type="button" onClick={deleteRowHandler} style={{margin:5,backgroundColor:"#aaaaaa",color:'#ffffff',border:0,padding:5}}>Delete Row</button>
                <button type="button" onClick={addRowHandler} style={{margin:5,backgroundColor:"#b13af1",color:'#ffffff',border:0,padding:5}}>Add Row</button>
            </div>
        </div>
    </div>
  );
};

export default ShipmentDetails;
