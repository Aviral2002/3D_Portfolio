import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="header">
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-blue-900 items-center justify-center flex font-bold shadow-md text-white mr-4">
        <p className="m-2">AS</p>
      </NavLink>  
      <nav className="flex text-lg gap-5 font-medium">
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-blue-300 font-bold"}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-blue-300 font-bold"}>
          Projects
        </NavLink>
        <NavLink to='/contact' className={({ isActive }) => isActive ? "text-blue-600 font-bold" : "text-blue-300 font-bold"}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;






