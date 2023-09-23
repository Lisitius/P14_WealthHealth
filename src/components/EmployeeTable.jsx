import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import useEmployeeTable from "../hooks/useEmployeeTable";

const EmployeeTable = () => {
  const { columns, rowData, onGridReady, onFilterTextChange } =
    useEmployeeTable();

  return (
    <div className="ag-theme-alpine font-custom" style={{ width: "90%" }}>
      <input
        type="text"
        onChange={onFilterTextChange}
        placeholder="Chercher..."
        className="mb-2 p-1 border-solid border border-black rounded"
      />
      <AgGridReact
        columnDefs={columns}
        rowData={rowData}
        domLayout="autoHeight"
        pagination={true}
        paginationPageSize={15}
        onGridReady={onGridReady}
      />
    </div>
  );
};

export default EmployeeTable;
