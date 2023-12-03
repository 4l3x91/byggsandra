import { useEffect, useState } from "react";
import BigServices from "./BigServices";
import SmallServices from "./SmallServices";
import { Service, data as services } from "./data";

interface Props {
  serviceRef: React.RefObject<HTMLDivElement>;
}

const Services = ({ serviceRef }: Props) => {
  const [currentService, setCurrentService] = useState<Service>(services[0]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const smScreen = 1024;

  useEffect(() => {
    const updateWindowWidth = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
    };

    window.addEventListener("resize", updateWindowWidth);
    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  const RenderServices = () => {
    return screenWidth < smScreen ? (
      <SmallServices services={services} />
    ) : (
      <BigServices
        currentService={currentService}
        setCurrentService={setCurrentService}
        services={services}
      />
    );
  };

  return (
    <section
      className={`
      px-4 pt-36 pb-56 z-10 relative bg-gradient-to-br text-white duration-500 transition-all animate-background
      ${currentService.name === services[0].name && "from-purple-600 via-purple-900 to-purple-950"}
      ${
        currentService.name === services[1].name &&
        "from-fuchsia-700 via-fuchsia-800 to-fuchsia-950"
      }
      ${currentService.name === services[2].name && "from-violet-700 via-violet-800 to-violet-950"}
      `}
      ref={serviceRef}
    >
      <div
        style={{
          position: "absolute",
          top: "-6rem",
          rotate: "180deg",
          transform: "rotateY(-180deg)",
          height: "30rem",
          left: "-5px",
          right: "-5px",
          backgroundImage: `url('bottomshape01.png')`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          zIndex: 1,
        }}
      />
      <div className="max-w-screen-2xl mx-auto z-50 relative">
        <div>
          <h2 className="tracking-tight font-semibold text-4xl sm:text-6xl md:text-7xl">
            Tjänster
          </h2>
          <h6 className="mt-4 mb-12 text-xl md:text-2xl whitespace-pre-line">
            Nedan finner du de tjänster jag erbjuder.{"\n"}Jag har även möjlighet att skräddarsy
            tjänster efter dina behov.
          </h6>
        </div>
        <RenderServices />
      </div>
    </section>
  );
};

export default Services;
