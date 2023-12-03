// import { IoIosMenu } from "react-icons/io";
// import NavLinks from "./NavLinks";

const Navigation = () => {
  return (
    <header className="w-full flex absolute z-20 lg:w-auto justify-content-center justify-center px-4 md:px-16 py-4 md:py-6">
      <nav className="flex font-medium lg:flex-row lg:mt-0 items-center w-full max-w-screen-2xl justify-center">
        <div className="mr-auto">Logo</div>
        {/* <NavLinks />
        <div className="block md:hidden"> 
        <IoIosMenu size={32} color="white" />
        </div> */}
      </nav>
    </header>
  );
};

export default Navigation;
