import { useEffect, useRef, useState } from "react";
import { CgArrowLongRight } from "react-icons/cg";
import { HiOutlineChevronDown } from "react-icons/hi";
import Partnerships from "../components/Partnerships";
import Services from "../components/Services";
import socials from "../data/socials";
const Home = () => {
  const [showArrow, setShowArrow] = useState(false);

  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  function scrollToNextSection(scrollRef: React.RefObject<HTMLDivElement>) {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // You can adjust this based on your requirements
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
      <section className="px-4 md:px-16 sm:pt-[4rem] pb-48 relative bg-gradient-to-b from-purple-700 to-purple-400">
        <div
          style={{
            position: "absolute",
            bottom: "-5rem",
            height: "30rem",
            left: "-5px",
            right: "-5px",
            backgroundImage: `url('./src/assets/bottomshape01.png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            zIndex: 1,
          }}
        />
        <div className="max-w-screen-2xl mx-auto flex relative">
          <div className="flex gap-2 text-white md:flex-col absolute md:bottom-0 bottom-[-4rem] md:top-0 md:right-0 z-50">
            {socials.map((link, index) => (
              <a key={index} href={link.path} target="_blank" className="hover:text-purple-200">
                {<link.icon size={38} />}
              </a>
            ))}
          </div>
          <div className="md:basis-1/4">
            <div className="text-white relative w-fit z-50">
              <h4 className="text-3xl sm:text-4xl md:text-6xl">Hej!</h4>
              <h6 className="text-lg sm:text-xl md:text-3xl">
                Jag är Sveriges första bygginspiratör,
              </h6>
              <h1 className="tracking-tighter text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase md:ml-[-.5rem] leading-none whitespace-pre-line">
                Sandra{"\n"}Moboraki
              </h1>
            </div>
            <div className="hidden md:block md:mt-4 relative z-50">
              <h6 className="text-md md:text-2xl text-white leading-snug whitespace-pre-line w-full sm:w-3/6 md:w-full ">
                Möt Byggsandra - Sveriges första bygginspiratör som driver jämställdhet och
                nyskapande inom branschen via konsulttjänster och inspirerande föreläsningar.{"\n"}
                Välkommen till en värld av innovativ bygginspiration.
              </h6>
            </div>
            <div className="lg:text-right mt-4 md:mt-8 relative z-50">
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
        <img
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
          src="./src/assets/byggsandra.png"
          alt="Bonnie Avatar"
        ></img>
        <div
          onClick={() => scrollToNextSection(aboutRef)}
          className={`hidden lg:flex absolute ease-in-out bottom-3 z-50 left-0 right-0 justify-center transition-opacity duration-1000 ${
            showArrow ? "opacity-100 hover:cursor-pointer" : "opacity-0"
          }`}
        >
          <HiOutlineChevronDown className={`${showArrow ? "animate-bounce" : ""}`} size={52} />
        </div>
      </section>
      <section className="px-4 py-12 z-50 relative" ref={aboutRef}>
        <div className="max-w-screen-2xl mx-auto py-8 lg:py-14">
          <div className="space-y-12">
            <div className="mx-auto gap-16 xl:gap-[4rem] lg:grid lg:grid-cols-2">
              <div className="font-light order-2">
                <div className="space-y-6 divide-y">
                  <h2 className="text-4xl tracking-tight font-bold">
                    Sveriges första bygginspiratör – förändringens pionjär!
                  </h2>
                  <p className="md:text-2xl whitespace-pre-line pt-6">
                    Med en brinnande passion för förändring och en helt egen syn på byggbranschen,
                    stoltserar jag som Sveriges första bygginspiratör. Jag skapade rollen själv
                    eftersom den enkelt uttryckt inte fanns, och mitt arbete är hängivet åt att
                    använda inspiration som ett kraftfullt verktyg för att driva innovation och
                    främja utvecklingen inom branschen.{"\n\n"}
                    Min vision sträcker sig bortom de konventionella gränserna, och jag tror på att
                    forma framtidens byggprojekt genom att injicera dem med en dos av kreativitet
                    och nytänkande.
                  </p>
                </div>
              </div>
              <img
                className="rounded-md"
                draggable="false"
                src="../../src/assets/byggsandra001.bmp"
                alt="Enkelt, snabbt och effektivt"
              />
            </div>
            <div className="mx-auto gap-16 xl:gap-[4rem] lg:grid lg:grid-cols-2">
              <div className="font-light order-0">
                <div className="space-y-6 divide-y">
                  <h2 className="text-4xl tracking-tight font-bold">Byggbranschens kvinnor</h2>
                  <p className="md:text-2xl whitespace-pre-line pt-6">
                    Byggbranschenskvinnor grundades med en vision att forma världens bästa
                    byggsektor, där alla är välkomna. Vårt uppdrag är att säkerställa att kvinnor
                    kan förverkliga sina drömmar och visioner. Vi främjar modet att utbilda sig inom
                    sina yrken och strävar efter att eliminera hinder för varje individ.
                  </p>
                  <button
                    type="button"
                    onClick={() => scrollToNextSection(servicesRef)}
                    className="hidden ml-auto bg-black text-white hover:bg-purple-400 hover:text-black font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center md:flex w-full md:w-auto justify-center items-center"
                  >
                    Läs mer <CgArrowLongRight size={24} className="ml-2" />
                  </button>
                </div>
              </div>
              <img
                className="rounded-md mt-4 lg:mt-0"
                width={"100%"}
                draggable="false"
                src="../../src/assets/byggsandra011.jpeg"
                alt="Enkelt, snabbt och effektivt"
              />
              <button
                type="button"
                onClick={() => scrollToNextSection(servicesRef)}
                className="md:hidden ml-auto bg-black text-white hover:bg-purple-400 hover:text-black font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center flex w-full md:w-auto justify-center items-center mt-4"
              >
                Läs mer <CgArrowLongRight size={24} className="ml-2" />
              </button>
            </div>
            <div className="mx-auto gap-16 xl:gap-[4rem] lg:grid lg:grid-cols-2">
              <div className="font-light order-2">
                <div className="space-y-6 divide-y">
                  <h2 className="mb-4 text-4xl tracking-tight font-bold">ByggSandra i media</h2>
                  <p className="mb-4 md:text-2xl whitespace-pre-line pt-6">
                    Jag har haft förmånen att få synas i flera olika medier och kanaler.{"\n"}Där
                    har jag fått möjlighet att dela med mig av mina tankar och idéer om
                    byggbranschen, och hur vi kan göra den mer jämställd och innovativ.
                  </p>
                </div>
              </div>
              <img
                className="rounded-md"
                draggable="false"
                src="../../src/assets/byggsandra004.bmp"
                alt="Enkelt, snabbt och effektivt"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 relative z-20 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div>
            <h2 className="tracking-tight font-semibold text-4xl sm:text-6xl md:text-7xl">
              Samarbeten
            </h2>
            <h6 className="mt-4 mb-6 md:mb-12 text-xl md:text-2xl whitespace-pre-line">
              Jag har haft förmånen att jobba med många fantastiska företag.
              {"\n"}
              Här är bara ett axplock av de fantastiska företag jag samarbetat med genom åren!
            </h6>
            <div className="h-[100px] md:h-[150px]">
              <Partnerships />
            </div>
          </div>
        </div>
      </section>
      <Services serviceRef={servicesRef} />
    </>
  );
};

export default Home;
