import { useEffect, useRef, useState } from "react";
import { HiOutlineChevronDown } from "react-icons/hi";
import About from "../components/About";
import Partnerships from "../components/Partnerships";
import Services from "../components/Services";
import socials from "../data/socials";
const HomePage = () => {
  const [showArrow, setShowArrow] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  function scrollToNextSection(scrollRef: React.RefObject<HTMLDivElement>) {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowArrow(true);
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <section className="px-4 md:px-16 sm:pt-[4rem] pb-48 relative bg-gradient-to-b from-purple-700 to-purple-400 min-h-[70vh]">
        <div style={{backgroundImage: "url(bottomshape01.png)"}} className="shape-bottom" />
        <div
          style={{ backgroundImage: "url(byggsandra02.png)" }}
          className="header-bg bottom-[-4rem] sm:bottom-[-1rem] lg:bottom-[-2rem]
          right-[-7.5rem] sm:right-[-2.5rem] md:right-[-5rem] xl:right-10
          h-[30rem] w-[30rem]
          md:h-[40rem] md:w-[40rem]
          lg:h-[50rem] lg:w-[50rem]
          absolute bg-contain bg-no-repeat"
        />
        <div className="max-w-screen-2xl mx-auto flex relative">
          <div className="flex gap-2 text-white md:flex-col absolute md:bottom-0 bottom-[-4rem] md:top-0 md:right-0 z-50">
            {socials.map((link, index) => (
              <a key={index} href={link.path} target="_blank" className="hover:text-purple-200">
                {<link.icon size={38} />}
              </a>
            ))}
          </div>
          <div className="md:basis-2/4">
            <div className="text-white relative w-fit z-50">
              <h4 className="text-3xl sm:text-4xl md:text-6xl">Hej!</h4>
              <h6 className="text-lg sm:text-xl md:text-3xl">
                Jag är Sveriges första bygginspiratör,
              </h6>
              <h1 className="tracking-tighter text-5xl sm:text-6xl md:text-7xl lg:text-8xl uppercase md:ml-[-.5rem] leading-none whitespace-pre-line">
                Sandra{"\n"}Moboraki
              </h1>
            </div>
            <div className="hidden md:block md:mt-4 relative z-50">
              <h6 className="text-md md:text-2xl text-white leading-snug whitespace-pre-line w-full sm:w-3/6 md:w-full">
                Möt Byggsandra - Sveriges första bygginspiratör som driver jämställdhet och
                nyskapande inom branschen via konsulttjänster och inspirerande föreläsningar.{"\n"}
                Välkommen till en värld av innovativ bygginspiration.
              </h6>
            </div>
            <div className="mt-4 md:mt-8 relative z-50">
              <button
                type="button"
                onClick={() => scrollToNextSection(servicesRef)}
                className=" bg-white hover:bg-black hover:text-white font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Läs mer om mitt arbete
              </button>
            </div>
          </div>
        </div>
        {/* <img
          className="
          w-[30rem]
          md:w-[40rem]
          lg:w-[65rem]
          h-auto block absolute
          bottom-[-.5rem]
          lg:bottom-5
          right-[-5rem]
          md:right-[-10rem]
          lg:right-[-15rem]
          xl:right-[-5rem]
          "
          src="byggsandra.png"
          alt="Bonnie Avatar"
        ></img> */}
        <div
          onClick={() => scrollToNextSection(aboutRef)}
          className={`hidden lg:flex absolute ease-in-out bottom-3 z-50 left-0 right-0 justify-center transition-opacity duration-1000 ${
            showArrow ? "opacity-100 hover:cursor-pointer" : "opacity-0"
          }`}
        >
          <HiOutlineChevronDown className={`${showArrow ? "animate-bounce" : ""}`} size={52} />
        </div>
      </section>
      <About aboutRef={aboutRef} />
      <Partnerships />
      <Services serviceRef={servicesRef} />
    </>
  );
};

export default HomePage;
