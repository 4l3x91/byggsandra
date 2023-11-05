import { IoIosMenu } from "react-icons/io";
import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <header className="w-full flex lg:w-auto bg-purple-700 justify-content-center justify-center p-4 md:px-4 md:py-0">
      <nav className="flex font-medium lg:flex-row lg:mt-0 items-center w-full max-w-screen-2xl justify-center">
        <div className="mr-auto">IMG</div>
        <NavLinks />
        <div className="block md:hidden"> 
        <IoIosMenu size={32} color="white" />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
