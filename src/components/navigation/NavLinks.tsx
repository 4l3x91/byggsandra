import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const NavLinks = [
    { title: "Home", path: "/" },
    { title: "Kontakt", path: "/kontakt" },
    { title: "Om mig", path: "/om-mig" },
  ];

  return (
    <div className="hidden md:flex md:gap-8">
      {NavLinks.map((link, index) => (
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
