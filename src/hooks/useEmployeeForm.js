import { useDispatch, useSelector } from "react-redux";
import {
  setEmployeeData,
  setFormErrors,
  setSuccess,
  toggleModal,
  resetEmployeeForm,
  addEmployee,
} from "../app/features/employeeSlice";

const useEmployeeForm = () => {
  const dispatch = useDispatch();
  const { employeeData, formErrors, isSuccess, isModalOpen } = useSelector(
    (state) => state.employee
  );
  const streetRegex = /^[0-9]+\s\w+\s\w+/;

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch(setEmployeeData({ ...employeeData, [name]: value }));
  };

  const validateForm = () => {
    const errors = {};
    if (employeeData.firstName.length < 3) {
      errors.firstName = "First Name must be at least 3 characters long";
    }
    if (employeeData.lastName.length < 3) {
      errors.lastName = "Last Name must be at least 3 characters long";
    }
    if (employeeData.dateOfBirth) {
      const dob = new Date(employeeData.dateOfBirth);
      const today = new Date();
      let age = today.getFullYear() - dob.getFullYear();
      const m = today.getMonth() - dob.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
        age--;
      }
      if (age < 18) {
        errors.dateOfBirth = "L'âge doit être d'au moins 18 ans";
      }
    } else {
      errors.dateOfBirth = "Date de naissance requise";
    }
    if (!employeeData.startDate) {
      errors.startDate = "Start Date is required";
    }
    if (employeeData.department.length < 3) {
      errors.department = "Department is required";
    }
    if (!streetRegex.test(employeeData.street)) {
      errors.street = 'Le format doit être le suivant "123 nom rue"';
    } else if (employeeData.street.length < 6) {
      errors.street = "Street must be at least 6 characters long";
    }

    if (employeeData.city.length < 2) {
      errors.city = "City must be at least 2 characters long";
    }
    if (!/^\d+$/.test(employeeData.zipCode)) {
      errors.zipCode = "Chiffre ou nombre uniquement";
    } else if (!employeeData.zipCode) {
      errors.zipCode = "Zip Code is required";
    }
    if (!employeeData.state) {
      errors.state = "State is required";
    }

    dispatch(setFormErrors(errors));
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isFormValid = validateForm();

    if (isFormValid) {
      dispatch(addEmployee(employeeData));
      dispatch(setSuccess(true));
      dispatch(toggleModal());
      dispatch(resetEmployeeForm());
    }
  };

  return {
    employeeData,
    handleInputChange,
    handleSubmit,
    formErrors,
    isSuccess,
    isModalOpen,
  };
};

export default useEmployeeForm;
