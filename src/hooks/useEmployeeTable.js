import { useEffect, useState } from "react";
import { db } from "../firebase";
import "firebase/compat/firestore";

const useEmployeeTable = () => {
  // Définition des colonnes du tableau
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

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    const snapshot = await db.collection("Employee").get();
    const employeesData = snapshot.docs.map((doc) => doc.data());
    setEmployees(employeesData);
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return {
    columns,
    rowData: employees,
  };
};

export default useEmployeeTable;
