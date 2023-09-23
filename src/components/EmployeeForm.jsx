import { mockStates } from "../mockData/mockStates";
import { mockDepartment } from "../mockData/mockDepartment";
import useEmployeeForm from "../hooks/useEmployeeForm";

const EmployeeForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    zipCode: "",
    state: "",
  };

  const { employeeData, handleInputChange, handleSave } =
    useEmployeeForm(initialState);

  return (
    <div className="mt-2 w-1/2 mx-auto p-4 shadow-lg font-custom">
      <h2 className="text-2xl font-bold mb-5 text-center">Add Employee</h2>
      <div className="grid grid-cols-2 gap-4">
        {/* Partie Identité Employé */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Employee identity</h3>
          <div className="mb-3">
            <label htmlFor="firstName" className="block mb-2">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={employeeData.firstName}
              onChange={handleInputChange}
              className="w-full p-2 border-solid border border-black rounded"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="lastName" className="block mb-2">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={employeeData.lastName}
              onChange={handleInputChange}
              className="w-full p-2 border-solid border border-black rounded"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="dateOfBirth" className="block mb-2">
              Date of Birth
            </label>
            <input
              type="date"
              name="dateOfBirth"
              id="dateOfBirth"
              value={employeeData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full p-2 border-solid border border-black rounded"
            />
          </div>
        </div>

        {/* Partie Informations Employé */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Employee information</h3>
          <div className="mb-3">
            <label htmlFor="startDate" className="block mb-2">
              Start Date
            </label>
            <input
              type="date"
              name="startDate"
              id="startDate"
              value={employeeData.startDate}
              onChange={handleInputChange}
              className="w-full p-2 border-solid border border-black rounded"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="department" className="block mb-2">
              Department
            </label>
            <select
              name="department"
              id="department"
              value={employeeData.department}
              onChange={handleInputChange}
              className="w-full p-2 border-solid border border-black rounded"
            >
              <option value="">Select Department</option>
              {mockDepartment.map((dept, index) => (
                <option key={index} value={dept}>
                  {dept}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Partie Adresse Employé */}
      <div className="mb-3">
        <h3 className="text-lg font-semibold mb-3">Employee address</h3>
        <div className="mb-3">
          <label htmlFor="street" className="block mb-2">
            Street
          </label>
          <input
            type="text"
            name="street"
            id="street"
            value={employeeData.street}
            onChange={handleInputChange}
            className="w-full p-2 border-solid border border-black rounded"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="city" className="block mb-2">
            City
          </label>
          <input
            type="text"
            name="city"
            id="city"
            value={employeeData.city}
            onChange={handleInputChange}
            className="w-full p-2 border-solid border border-black rounded"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="zipCode" className="block mb-2">
            Zip Code
          </label>
          <input
            type="text"
            name="zipCode"
            id="zipCode"
            value={employeeData.zipCode}
            onChange={handleInputChange}
            className="w-full p-2 border-solid border border-black rounded"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state" className="block mb-2">
            State
          </label>
          <select
            name="state"
            id="state"
            value={employeeData.state}
            onChange={handleInputChange}
            className="w-full p-2 border-solid border border-black rounded"
          >
            <option value="">Select state</option>
            {mockStates.map((state, index) => (
              <option key={index} value={state.abbreviation}>
                {state.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="button"
        onClick={handleSave}
        className="bg-customGreen w-full mt-3 p-2 text-white font-semibold rounded"
      >
        Save Employee
      </button>
    </div>
  );
};

export default EmployeeForm;
