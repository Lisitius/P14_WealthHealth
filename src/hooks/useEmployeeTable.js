import { useEffect, useState } from "react";
import { db } from "../firebase";

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

  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const snapshot = await db.collection("Employee").get();
      const employeesData = snapshot.docs.map((doc) => doc.data());
      setEmployees(employeesData);
    } catch (error) {
      console.error("Erreur lors de la récupération des employés:", error);
    }
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
