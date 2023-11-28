import { mockStates } from "../mockData/mockStates";
import { mockDepartment } from "../mockData/mockDepartment";
import useEmployeeForm from "../hooks/useEmployeeForm";
import { Dropdown } from "p14-package-dropdown-wealth-health";
import ReactModal from "react-modal";
import { useDispatch } from "react-redux";
import { toggleModal } from "../app/features/employeeSlice";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EmployeeForm = () => {
  const dispatch = useDispatch();
  const {
    employeeData,
    handleInputChange,
    handleSubmit,
    formErrors,
    isModalOpen,
  } = useEmployeeForm();

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid black",
      padding: "5px",
      fontWeight: "bold",
      backgroundColor: "#93ad18",
      fontSize: "30px",
      marginBottom: "5px",
    },
  };

  const closeModal = () => {
    dispatch(toggleModal());
  };

  return (
    <div className="mt-2 w-1/2 mx-auto p-4 shadow-lg font-custom">
      <h2 className="text-2xl font-bold mb-5 text-center">Add Employee</h2>
      {/* Modal */}
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={modalStyle}
        contentLabel="Employé ajouté"
      >
        <h2 className="text-white">Employé ajouté avec succès</h2>
        <button className="font-normal text-xl text-black" onClick={closeModal}>
          Fermer
        </button>
      </ReactModal>
      <div className="grid grid-cols-2 gap-4">
        {/* Employee Identity Part */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Employee identity</h3>
          <div className="mb-3">
            {/* firstname */}
            <label htmlFor="firstName" className="block mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={employeeData.firstName}
              onChange={handleInputChange}
              className={`w-full p-2 border-solid border border-black rounded ${
                formErrors.firstName && "border-red-500"
              }`}
            />
            {formErrors.firstName && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.firstName}
              </p>
            )}
          </div>
          <div className="mb-3">
            {/* lastname */}
            <label htmlFor="lastName" className="block mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={employeeData.lastName}
              onChange={handleInputChange}
              className={`w-full p-2 border-solid border border-black rounded ${
                formErrors.lastName ? "border-red-500" : ""
              }`}
            />
            {formErrors.lastName && (
              <p className="text-red-500 text-sm mt-1">{formErrors.lastName}</p>
            )}
          </div>
          <div className="mb-3">
            {/* date of birth */}
            <label htmlFor="dateOfBirth" className="block mb-2">
              Date of Birth
            </label>
            <DatePicker
              id="dateOfBirth"
              selected={
                employeeData.dateOfBirth
                  ? new Date(employeeData.dateOfBirth)
                  : null
              }
              onChange={(date) =>
                handleInputChange({
                  target: { name: "dateOfBirth", value: date },
                })
              }
              dateFormat="dd/MM/yyyy"
              className={`w-full p-2 border-solid border border-black rounded ${
                formErrors.dateOfBirth ? "border-red-500" : ""
              }`}
            />
            {formErrors.dateOfBirth && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.dateOfBirth}
              </p>
            )}
          </div>
        </div>

        {/* Employee Information Part */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Employee information</h3>
          <div className="mb-3">
            {/* start date */}
            <label htmlFor="startDate" className="block mb-2">
              Start Date
            </label>
            <DatePicker
              id="startDate"
              selected={
                employeeData.startDate ? new Date(employeeData.startDate) : null
              }
              onChange={(date) =>
                handleInputChange({
                  target: { name: "startDate", value: date },
                })
              }
              dateFormat="dd/MM/yyyy"
              className={`w-full p-2 border-solid border border-black rounded ${
                formErrors.startDate ? "border-red-500" : ""
              }`}
            />
            {formErrors.startDate && (
              <p className="text-red-500 text-sm mt-1">
                {formErrors.startDate}
              </p>
            )}
          </div>
          {/* department */}
          <div className="mb-3">
            <label htmlFor="department" className="block mb-2">
              Department
            </label>
            <Dropdown
              name="department"
              value={employeeData.department}
              onChange={handleInputChange}
              formErrors={formErrors}
              options={mockDepartment.map((dept) => ({ value: dept }))}
              defaultOption="Select Department"
            />
          </div>
        </div>
      </div>

      {/* Party Address Employee */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold mb-3">Employee address</h3>
        <div className="mb-3">
          {/* street */}
          <label htmlFor="street" className="block mb-2">
            Street
          </label>
          <input
            type="text"
            name="street"
            id="street"
            value={employeeData.street}
            onChange={handleInputChange}
            className={`w-full p-2 border-solid border border-black rounded ${
              formErrors.street ? "border-red-500" : ""
            }`}
          />
          {formErrors.street && (
            <p className="text-red-500 text-sm mt-1">{formErrors.street}</p>
          )}
        </div>
        <div className="mb-3">
          {/* city */}
          <label htmlFor="city" className="block mb-2">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={employeeData.city}
            onChange={handleInputChange}
            className={`w-full p-2 border-solid border border-black rounded ${
              formErrors.city ? "border-red-500" : ""
            }`}
          />
          {formErrors.city && (
            <p className="text-red-500 text-sm mt-1">{formErrors.city}</p>
          )}
        </div>
        <div className="mb-3">
          {/* zip code */}
          <label htmlFor="zipCode" className="block mb-2">
            Zip Code
          </label>
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            value={employeeData.zipCode}
            onChange={handleInputChange}
            className={`w-full p-2 border-solid border border-black rounded ${
              formErrors.zipCode ? "border-red-500" : ""
            }`}
          />
          {formErrors.zipCode && (
            <p className="text-red-500 text-sm mt-1">{formErrors.zipCode}</p>
          )}
        </div>
        <div className="mb-3">
          {/* state */}
          <label htmlFor="state" className="block mb-2">
            State
          </label>
          <Dropdown
            name="state"
            value={employeeData.state}
            onChange={handleInputChange}
            options={mockStates.map((state) => ({
              value: state.name,
            }))}
            defaultOption="Select state"
            formErrors={formErrors}
          />
        </div>
      </div>

      <button
        type="button"
        className="bg-customGreen w-full mt-3 p-2 text-white font-semibold rounded"
        onClick={handleSubmit}
      >
        Save Employee
      </button>
    </div>
  );
};

export default EmployeeForm;
