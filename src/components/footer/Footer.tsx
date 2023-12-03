import { CgExternal } from "react-icons/cg";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import socials from "../../shared/data/socials";
import { data as footerLinks } from "./data";

const Footer = () => {
  return (
    <footer className="w-full lg:w-auto bg-black justify-center px-4 text-white safe-bottom">
      <div className="max-w-screen-2xl mx-auto flex flex-col py-4 md:pb-6 md:pt-24">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://byggsandra.se/" className="flex items-center">
              ByggSandra
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-1">
            {footerLinks.map((link, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold uppercase">{link.title}</h2>
                <ul className="font-medium">
                  {link.links.map((link, index) => (
                    <li key={index} className="mb-4 text-xs md:text-sm">
                      {link.external ? (
                        <a href={link.href} className="hover:underline flex">
                          {link.name}
                          <CgExternal size={16} />
                        </a>
                      ) : (
                        <Link className="hover:underline" to={link.href}>
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[1px] bg-white opacity-50 w-full my-6 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://appstract.se/"
            target="_blank"
            className="hover:underline text-sm sm:text-center inline-flex gap-1"
          >
            Made with <FaHeart size={18} className="text-red-400 text-xl" /> by Appstract © 2023
          </a>
          <div className="flex mt-4 gap-2 sm:justify-center sm:mt-0">
            {socials.map((link, index) => (
              <a key={index} href={link.path} target="_blank" className="hover:text-fuchsia-700">
                <link.icon size={32} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
