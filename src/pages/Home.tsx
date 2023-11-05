import { RiFacebookFill } from "react-icons/ri";
import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import PricingCard from "../components/PricingCard";
import { plans } from "../data/plans";


const Home = () => {
  const Socials = [
    { title: "Instagram", path: "https://www.instagram.com/byggsandra/", icon: <RxInstagramLogo size="32" /> },
    { title: "Facebook", path: "https://www.facebook.com/byggsandra", icon: <RiFacebookFill size="32" /> },
    { title: "LinkedIn", path: "https://se.linkedin.com/in/sandra-byggsandra-mobaraki-30059480", icon: <RxLinkedinLogo size="32" /> },
  ];
  return (
    <>
      <section
        className="px-4 sm:pt-24 pb-48 overflow-hidden relative bg-gradient-to-b from-purple-700 to-purple-400"
      >
        <div style={{
position: "absolute",
bottom: "-5rem",
height: "30rem",
left: 0,
right: 0,
backgroundImage: `url('./src/assets/bottomshape01.png')`,
backgroundRepeat: "no-repeat",
backgroundPosition: "bottom",
backgroundSize: "cover",
zIndex: 1,
        }} />
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex flex-row flex-wrap md:justify-between w-full items-center">
            <div className="text-white relative" style={{zIndex: 9999}}>
              <div className="md:border-l-4 md:border-b-4 md:pl-2 md:pb-2 border-white rounded-bl-xl">
                <h6 className="text-3xl flip-animation">Byggnadsinspiratör</h6>
                <h1 className="tracking-tighter text-6xl sm:text-8xl md:text-9xl uppercase mb-[-.25rem] md:mb-[-.75rem]">
                  Sandra
                  <br />
                  Moboraki
                </h1>
              </div>
              <div className="flex flex-col-reverse sm:flex-row  mt-2">
                <div className="flex gap-1">
                {Socials.map((link, index) => (
                  <a
                  key={index}
                  href={link.path}
                  target="_blank"
                  className="hover:text-purple-200"
                  >
                    {link.icon}
                  </a>
                ))}
                </div>
              <div className="sm:ml-auto">Sveriges första bygginspiratör</div>
              </div>
              </div>
            </div>
          </div>
        <img
          className="w-[800px] h-auto block absolute bottom-[-.5rem] lg:bottom-5 right-[-8rem] sm:right-[-15rem] lg:right-0"
          src="./src/assets/byggsandra.png"
          alt="Bonnie Avatar"
        ></img>
      </section>
      <section className="px-4 py-12 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex lg:px-32">
            <div className="border-l-4 border-t-4 pl-2 pt-2 border-black basis-1/5 rounded-tl-xl">
              <h2 className="tracking-tighter text-5xl sm:text-6xl md:text-7xl uppercase">
                Tjänster
              </h2>
            </div>
          </div>
          <div className="flex mb-8 lg:px-32">
            <h6 className="text-2xl md:basis-1/2 xl:basis-1/4">Nedan finner du de tjänster jag erbjuder. Jag har även möjlighet att skräddarsy tjänster efter dina behov.</h6>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:px-32">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>
      <section
        className="px-4 pt-32 pb-48 overflow-hidden relative bg-gradient-to-b from-purple-700 to-purple-400"
        style={{
          clipPath: "polygon(0 15%, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div className="max-w-screen-2xl mx-auto relative">
          <div className="flex flex-row flex-wrap md:justify-between w-full items-center">
            <div className="text-white">
              <div className="border-l-4 border-b-4 pl-2 pb-2">
                <h6 className="text-3xl">Byggnadsinspiratör</h6>
                <h1 className="tracking-tighter text-6xl sm:text-8xl md:text-9xl uppercase">
                  Sandra
                  <br />
                  Moboraki
                </h1>
              </div>
              <div className="text-right">Sveriges första bygginspiratör</div>
            </div>
          </div>
        </div>
        <img
          className="ml-auto mt-8 lg:mt-0 w-[800px] h-auto block absolute bottom-3 right-0"
          src="./src/assets/byggsandra.png"
          alt="Bonnie Avatar"
        ></img>
      </section>
    </>
  );
};

export default Home;
