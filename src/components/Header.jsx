import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div className="bg-customGreen p-4 flex items-center justify-between font-custom">
      <div className="text-3xl text-white font-semibold">Wealth Health</div>
      <nav className="flex space-x-4">
        <NavLink
          to="/"
          className={`text-white text-lg ${
            location.pathname === "/" ? "underline" : ""
          }`}
          end
        >
          Employee List
        </NavLink>
        <NavLink
          to="/add"
          className={`text-white text-lg ${
            location.pathname === "/add" ? "underline" : ""
          }`}
        >
          Add Employee
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
