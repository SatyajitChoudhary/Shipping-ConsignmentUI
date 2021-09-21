import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { countries } from "../assets/country";
import React,{useState} from 'react'

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
  editable: true
}
const COL_DEFS = [
  {
    headerName: "",
    checkboxSelection: true,
    headerCheckboxSelection: true,
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
const ShipmentTable = (props) => {
  const { setGridApi, gridApi,rowData,setRowData } = props;
  const [gridColumnApi, setGridColumnApi] = useState(null);
  const onGridReady = (params) => {
    setGridApi(params.api);
    setGridColumnApi(params.columnApi);
  };
  return (
    <div className="ag-theme-alpine" style={{ height: 500, width: 1400 }}>
      <AgGridReact
        rowSelection="multiple"
        rowData={rowData}
        columnDefs={COL_DEFS}
        onGridReady={onGridReady}
        defaultColDef={def_COL_DEFS}
        suppressRowClickSelection={true}
        singleClickEdit={true}
      />
    </div>
  );
};

export default ShipmentTable;