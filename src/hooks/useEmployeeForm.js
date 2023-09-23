import { useState } from "react";

const useEmployeeForm = (initialState, onSave) => {
  const [employeeData, setEmployeeData] = useState(initialState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSave = async () => {
    try {
      console.log("Employee Data: ", employeeData);
      if (onSave) onSave(employeeData);
    } catch (error) {
      console.log("Error saving employee data: ", error);
    }
  };

  return {
    employeeData,
    handleInputChange,
    handleSave,
  };
};

export default useEmployeeForm;
