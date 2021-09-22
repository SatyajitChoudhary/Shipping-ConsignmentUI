import React, { useState, useEffect } from "react";
import Header from "../utils/Header";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import ShipmentTable from "./ShipmentTable";

const ShipmentDetails = (props) => {
  const {
    rowData,
    setRowData,
    setenablePickup,
    enablePickup,
    gridApi,
    setGridApi,
  } = props;
  const [disabledButtons, setdisabledButtons] = useState(true);

  const getAllRows = () => {
    let rowData = [];
    gridApi.forEachNode((node) => rowData.push(node.data));
    return rowData;
  };

  const deleteRowHandler = () => {
    const selectedRows = gridApi.getSelectedRows();
    gridApi.applyTransaction({ remove: selectedRows });

    gridApi.stopEditing(true);

    setenablePickup(getAllRows().length > 0);
  };
  const addRowHandler = () => {
    gridApi.applyTransaction({ add: [{}] });

    gridApi.stopEditing(true);

    setenablePickup(getAllRows().length > 0);
  };

  return (
    <div style={{ border: "2px solid #b83efa", backgroundColor: "#efefef" }}>
      <Header headerTitle={"Shipment Details"} helpPresent={true} />
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
        <ShipmentTable
          gridApi={gridApi}
          setGridApi={setGridApi}
          rowData={rowData}
          setRowData={setRowData}
          disabledButtons={disabledButtons}
          setDisabledButtons={setdisabledButtons}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            padding: 10,
          }}>
          <button
            type="button"
            onClick={deleteRowHandler}
            disabled={disabledButtons}
            style={{
              margin: 5,
              backgroundColor: `${disabledButtons ? "#ffffff" : "#3a3a3a"}`,
              color: `${disabledButtons ? "#aeaeae" : "#ffffff"}`,
              borderWidth: 1,
              borderRadius: 3,
              borderStyle: "solid",
              borderColor: `${disabledButtons ? "#aeaeae" : "#ffffff"}`,
              padding: 5,
            }}>
            Delete Row
          </button>
          <button
            type="button"
            onClick={addRowHandler}
            style={{
              margin: 5,
              backgroundColor: "#b13af1",
              color: "#ffffff",
              border: 0,
              padding: 5,
            }}>
            Add Row
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;
