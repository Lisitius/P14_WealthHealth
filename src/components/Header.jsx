import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  return (
    <div className="bg-customGreen p-4 flex justify-between">
      <div className="text-lg font-semibold">Wealth Health</div>
      <nav className="flex space-x-4">
        <NavLink
          to="/"
          className={location.pathname === "/" ? "underline" : ""}
          end
        >
          Employee List
        </NavLink>
        <NavLink
          to="/add"
          className={location.pathname === "/add" ? "underline" : ""}
        >
          Add Employee
        </NavLink>
      </nav>
    </div>
  );
}

export default Header;
