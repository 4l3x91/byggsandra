import { FaHeart } from 'react-icons/fa';
import socials from "../data/socials";

const Footer = () => {
  const links = [
    { 
      title: "Länkar",
      links: [
        { name: "Kontakt", href: "https://flowbite.com/" },
        { name: "Om", href: "https://tailwindcss.com/" }
      ]
    },
    { 
      title: "Follow us",
      links: [
        { name: "Github", href: "" },
        { name: "Discord", href: "" }

      ]
    },
    { 
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "" },
        { name: "Terms & Conditions", href: "" }
      ]
    },
  ];

  return (
    <footer className="w-full lg:w-auto bg-purple-700 justify-center px-4 md:px-16 py-4 md:py-6 text-white">
      <div className="max-w-screen-xl mx-auto flex flex-col">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="https://flowbite.com/" className="flex items-center">
              ByggSandra
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            {links.map((link, index) => (
              <div key={index}>
                <h2 className="mb-6 text-sm font-semibold uppercase">{link.title}</h2>
                <ul className="font-medium">
                  {link.links.map((link, index) => (
                    <li key={index} className="mb-4">
                      <a href={link.href} className="hover:underline">
                        {link.name}
                      </a>
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
              <a key={index} href={link.path} target="_blank" className="hover:text-purple-200">
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
