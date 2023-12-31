import EmployeeTable from "../components/EmployeeTable";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center font-custom">
      <h1 className="text-large font-bold mb-5 mt-5">Employee List</h1>{" "}
      <EmployeeTable />
    </div>
  );
};

export default Home;
