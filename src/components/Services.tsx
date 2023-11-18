import { useEffect, useState } from "react";
import { Service, services } from "../data/services";
import BigServices from "./services/BigServices";
import SmallServices from "./services/SmallServices";

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
      className="px-4 py-36 z-10 relative bg-gradient-to-b from-purple-400 to-purple-700 text-white"
      ref={serviceRef}
    >
      {screenWidth > smScreen ? (
        <div
          className="absolute top-0 bottom-0 bg-no-repeat bg-cover bg-center-top"
          style={{
            inset: 0,
            backgroundImage: `linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.25),
            rgba(0, 0, 0, 0.35)
          ),url('${currentService.image}')`,
            filter: "opacity(.8)",
          }}
        />
      ) : (
        <>asd</>
      )}
      <div
        style={{
          position: "absolute",
          top: "-6rem",
          rotate: "180deg",
          transform: "rotateY(-180deg)",
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
        <div className="px-0 sm:px-12 md:px-0">
          <RenderServices />
        </div>
      </div>
    </section>
  );
};

export default Services;
