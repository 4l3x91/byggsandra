import Partnerships from "../components/Partnerships";
import PricingCard from "../components/PricingCard";
import { plans } from "../data/plans";
import socials from "../data/socials";

const Home = () => {
  return (
    <>
      <section className="px-4 md:px-16 sm:pt-[4rem] pb-48 overflow-hidden relative bg-gradient-to-b from-purple-700 to-purple-400">
        <div
          style={{
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
              <h6 className="text-lg sm:text-xl md:text-3xl">Jag är Sveriges första bygginspiratör,</h6>
              <h1 className="tracking-tighter text-5xl sm:text-6xl md:text-8xl lg:text-9xl uppercase md:ml-[-.5rem] leading-none whitespace-pre-line">
                Sandra{"\n"}Moboraki
              </h1>
            </div>
            <div className="hidden md:block md:mt-4 relative z-50 flex">
              <h6 className="text-md md:text-2xl text-white leading-snug whitespace-pre-line w-full sm:w-3/6 md:w-full ">
                Möt Byggsandra - Sveriges första bygginspiratör som driver jämställdhet och
                nyskapande inom branschen via konsulttjänster och inspirerande föreläsningar.{"\n"}
                Välkommen till en värld av innovativ bygginspiration.
              </h6>
            </div>
            <div className="lg:text-right mt-4 md:mt-8 relative z-50">
              <button
                type="button"
                className=" bg-white hover:bg-gray-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                Läs mer om mig
                <svg
                  className="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
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
      </section>
      <section className="px-4 py-12 overflow-hidden">
        <div className="max-w-screen-2xl mx-auto">
          <div className="lg:px-32">
            <h2 className="tracking-tight lg:ml-[-1rem] font-semibold text-4xl sm:text-6xl md:text-7xl">
              Tjänster
            </h2>
            <h6 className="mt-4 mb-12 text-xl md:text-2xl whitespace-pre-line">
              Nedan finner du de tjänster jag erbjuder. {"\n"}
              Jag har även möjlighet att skräddarsy tjänster efter dina behov.
            </h6>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:px-32">
            {plans.map((plan) => (
              <PricingCard key={plan.name} plan={plan} />
            ))}
          </div>
        </div>
      </section>
      <section className="px-4 py-12 overflow-hidden bg-gradient-to-b from-purple-800 to-purple-700">
        <div className="max-w-screen-2xl mx-auto">
          <div className="lg:px-32 text-white">
            <h2 className="tracking-tight font-semibold text-4xl sm:text-6xl md:text-7xl">
              Samarbeten
            </h2>
            <h6 className="mt-4 mb-6 md:mb-12 text-xl md:text-2xl whitespace-pre-line">
              Jag har haft förmånen att jobba med många fantastiska företag.{"\n"}
              Här är bara ett axplock av de fantastiska företag jag samarbetat med genom åren!
            </h6>
            <div className="h-[100px] md:h-[150px]">
              <Partnerships />
            </div>
          </div>
        </div>
      </section>
      {/* <section
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
      </section> */}
    </>
  );
};

export default Home;
