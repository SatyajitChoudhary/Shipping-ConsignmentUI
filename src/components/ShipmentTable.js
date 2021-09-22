import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { countries } from "../assets/country";
import React, { useState } from "react";

const ROW_DATA = [
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
];
const def_COL_DEFS = {
  editable: true,
};

const ShipmentTable = (props) => {
  const {
    setGridApi,
    gridApi,
    rowData,
    setRowData,
    disabledButtons,
    setDisabledButtons,
  } = props;
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };

  const enabledRow = (params) =>
    params.node.rowIndex === gridApi.getDisplayedRowCount() - 1;

  const COL_DEFS = [
    {
      headerName: "",
      checkboxSelection: true,
      headerCheckboxSelection: true,
      width: 50,
      field: "checkboxBtn",
      editable: false,
    },
    {
      field: "country",
      minWidth: 150,
      headerName: "*Country/Territory",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: countries.map((item) => (item ? item.name : null)),
      },
      cellRendererParams: { checkbox: true },
      editable: enabledRow,
      valueFormatter: (params) => {
        if (!params.value) {
          return "Select Country";
        }
      },
    },
    {
      field: "postalCode",
      minWidth: 150,
      headerName: "*To ZIP/Postal code",
      editable: enabledRow,
      valueFormatter: (params) => {
        if (!params.value) {
          return 0;
        }
      },
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
      editable: enabledRow,
      valueFormatter: (params) => {
        if (!params.value) {
          return "Select";
        }
      },
    },
    {
      field: "handlingUnits",
      width: 150,
      headerName: "*Handling Units",
      editable: enabledRow,
      valueFormatter: (params) => {
        if (!params.value) {
          return 0;
        }
      },
    },
    {
      field: "weight",
      width: 150,
      headerName: "*Weight(lbs)",
      editable: enabledRow,
      valueFormatter: (params) => {
        if (!params.value) {
          return 0;
        }
      },
    },
    {
      field: "packageType",
      headerName: "*Package Type",
      cellEditor: "agSelectCellEditor",
      cellEditorParams: {
        values: ["Carton", "Crate", "Loose", "Bundle", "Other"],
      },
      editable: enabledRow,
      valueFormatter: (params) => {
        if (!params.value) {
          return "Carton";
        }
      },
    },
  ];

  const onSelectionChanged = () => {
    var selectedRows = gridApi.getSelectedRows();
    setDisabledButtons(selectedRows.length === 0);
  };
  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: 1200 }}>
      <AgGridReact
        rowSelection="multiple"
        rowData={rowData}
        columnDefs={COL_DEFS}
        onGridReady={onGridReady}
        defaultColDef={def_COL_DEFS}
        suppressRowClickSelection={true}
        singleClickEdit={true}
        onSelectionChanged={onSelectionChanged}
        onCellValueChanged
      />
    </div>
  );
};

export default ShipmentTable;
