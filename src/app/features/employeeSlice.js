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
  },
});

export const {
  setEmployeeData,
  setFormErrors,
  setSuccess,
  toggleModal,
  resetEmployeeForm,
} = employeeSlice.actions;

export default employeeSlice.reducer;