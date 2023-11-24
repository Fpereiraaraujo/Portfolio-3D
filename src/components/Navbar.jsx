import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>

        <h1 className='text-lg'>
          <div className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
          {" "}
          <span className='blue-gradient_text font-semibold drop-shadow'>
            {" "}
            FP
          </span>{" "}
          </div>
          
        </h1>
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Sobre
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projetos
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
