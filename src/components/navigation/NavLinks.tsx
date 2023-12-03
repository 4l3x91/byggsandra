import { NavLink } from "react-router-dom";
import { data as navLinks } from "./data";

const NavLinks = () => {
  return (
    <div className="hidden md:flex md:gap-8">
      {navLinks.map((link, index) => (
        <NavLink
          key={index}
          to={link.path}
          className="py-4 px-0 border-b-2 border-transparent text-white"
        >
          {link.title}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;
