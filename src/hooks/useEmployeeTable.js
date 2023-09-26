import { useRef, useEffect, useState } from "react";
import { db } from "../firebase";
import "firebase/compat/firestore";

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

  const [employees, setEmployees] = useState([]);

  const onGridReady = (params) => {
    gridApiRef.current = params.api;
  };

  const onFilterTextChange = (event) => {
    gridApiRef.current.setQuickFilter(event.target.value);
  };

  useEffect(() => {
    const unsub = db.collection("Employee").onSnapshot((snapshot) => {
      const employees = snapshot.docs.map((doc) => doc.data());
      setEmployees(employees);
    });
    return unsub;
  }, []);

  return {
    columns,
    rowData: employees,
    onGridReady,
    onFilterTextChange,
  };
};

export default useEmployeeTable;
