import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

// import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { countries } from "../assets/country";

const ShipmentTable = (props) => {
  const { setGridApi, gridApi } = props;
  const [gridColumnApi, setGridColumnApi] = useState(null);

  const columnDefs = [
    {
      headerName: "",
      checkboxSelection: true,
      headerCheckboxSelection: true,
      // pinned: "left",
      width: 50,
      field: "checkboxBtn",
    },
    {
      field: "country",
      minWidth: 150,
      headerName: "*Country/Territory",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: countries.map((item) => (item ? item.name : null)),
      },
      cellRendererParams: { checkbox: true }

    },
    {
      field: "postalCode",
      minWidth: 150,
      headerName: "*To ZIP/Postal code",
    },
    {
      field: "serviceType",
      minWidth: 150,
      headerName: "*Service Type",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: [
          "Economy",
          "24hr Delivery",
          "2 Day Delivery",
          "Express Shipping",
        ],
      },
    },
    {
      field: "handlingUnits",
      minWidth: 150,
      headerName: "*Handling Units",
    },
    {
      field: "weight",
      minWidth: 150,
      headerName: "*Weight(lbs)",
    },
    {
      field: "packageType",
      minWidth: 150,
      headerName: "*Package Type",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Carton", "Crate", "Loose", "Bundle", "Other"],
      },
    },
  ];

  const [rowData, setRowData] = useState([
    {
      country: "India1",
      postalCode: 700000,
      serviceType: "Economy",
      handlingUnits: 2,
      weight: 20,
      packageType: "Carton",
    },
    {
      country: "India",
      postalCode: 700000,
      serviceType: "Economy",
      handlingUnits: 2,
      weight: 20,
      packageType: "Carton",
    },
    {
      country: "India3",
      postalCode: 700000,
      serviceType: "Economy",
      handlingUnits: 2,
      weight: 20,
      packageType: "Carton",
    },
  ]);

  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);

    // let idSequence = 0;
    // gridApi.forEachNode( function(rowNode, index) {
    //   rowNode.id = idSequence++;
    // });
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: 1400 }}>
      <AgGridReact
        getRowNodeId={(n) => n.id}
        // immutableData={true}
        rowSelection={"multiple"}
        // enableRangeSelection={true}
        onGridReady={onGridReady}
        rowData={rowData}
        columnDefs={columnDefs}
      />
    </div>
  );
};

export default ShipmentTable;
