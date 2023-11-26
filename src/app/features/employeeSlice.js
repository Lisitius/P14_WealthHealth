import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employeeData: {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    zipCode: "",
    state: "",
  },
  formErrors: {},
  isSuccess: false,
  isModalOpen: false,
  employees: [],
};

const saveEmployeesToSessionStorage = (employees) => {
  sessionStorage.setItem("employees", JSON.stringify(employees));
};

export const employeeSlice = createSlice({
  name: "employee",
  initialState,
  reducers: {
    setEmployeeData: (state, action) => {
      state.employeeData = { ...state.employeeData, ...action.payload };
    },

    setFormErrors: (state, action) => {
      state.formErrors = action.payload;
    },

    setSuccess: (state, action) => {
      state.isSuccess = action.payload;
    },

    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },

    resetEmployeeForm: (state) => {
      state.employeeData = initialState.employeeData;
      state.formErrors = {};
      state.isSuccess = false;
    },
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
      saveEmployeesToSessionStorage(state.employees);
    },
  },
});

export const {
  setEmployeeData,
  setFormErrors,
  setSuccess,
  toggleModal,
  resetEmployeeForm,
  addEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;
