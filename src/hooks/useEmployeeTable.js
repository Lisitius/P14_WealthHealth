import { useRef } from "react";
import { mockEmployees } from "../mockData/mockEmployee";

const useEmployeeTable = () => {
  const columns = [
    { headerName: "First Name", field: "firstName", flex: 1 },
    { headerName: "Last Name", field: "lastName", flex: 1 },
    { headerName: "Date of Birth", field: "dateOfBirth", flex: 1 },
    { headerName: "Start Date", field: "startDate", flex: 1 },
    { headerName: "Department", field: "department", flex: 1 },
    { headerName: "Street", field: "street", flex: 1 },
    { headerName: "City", field: "city", flex: 1 },
    { headerName: "State", field: "state", flex: 1 },
    { headerName: "Zip Code", field: "zipCode", flex: 1 },
  ];

  const gridApiRef = useRef(null);

  const onGridReady = (params) => {
    gridApiRef.current = params.api;
  };

  const onFilterTextChange = (event) => {
    gridApiRef.current.setQuickFilter(event.target.value);
  };

  return {
    columns,
    rowData: mockEmployees,
    onGridReady,
    onFilterTextChange,
  };
};

export default useEmployeeTable;
