import { useState } from "react";
import { db } from "../firebase";

const useEmployeeForm = (initialState) => {
  const [employeeData, setEmployeeData] = useState(initialState);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSave = () => {
    db.collection("Employee").add(employeeData);
    setEmployeeData(initialState);
    setIsSuccess(true);
    setIsModalOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (employeeData.firstName.length < 3) {
      errors.firstName = "First Name must be at least 3 characters long";
    }
    if (employeeData.lastName.length < 3) {
      errors.lastName = "Last Name must be at least 3 characters long";
    }
    if (!employeeData.dateOfBirth) {
      errors.dateOfBirth = "Date of Birth is required";
    }
    if (!employeeData.startDate) {
      errors.startDate = "Start Date is required";
    }
    if (employeeData.department.length < 3) {
      errors.department = "Department is required";
    }
    if (employeeData.street.length < 6) {
      errors.street = "Street must be at least 6 characters long";
    }
    if (employeeData.city.length < 2) {
      errors.city = "City must be at least 2 characters long";
    }
    if (!employeeData.zipCode) {
      errors.zipCode = "Zip Code is required";
    }
    if (!employeeData.state) {
      errors.state = "State is required";
    }
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      handleSave();
    }
  };

  return {
    employeeData,
    handleInputChange,
    handleSave,
    handleSubmit,
    isSuccess,
    formErrors,
    isModalOpen,
    setIsModalOpen,
  };
};

export default useEmployeeForm;
