import { CgArrowLongRight } from "react-icons/cg";

interface Props {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const About = ({ aboutRef }: Props) => {
  return (
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
                  använda inspiration som ett kraftfullt verktyg för att driva innovation och främja
                  utvecklingen inom branschen.{"\n\n"}
                  Min vision sträcker sig bortom de konventionella gränserna, och jag tror på att
                  forma framtidens byggprojekt genom att injicera dem med en dos av kreativitet och
                  nytänkande.
                </p>
              </div>
            </div>
            <img
              className="rounded-md"
              draggable="false"
              src="public/byggsandra001.bmp"
              alt="Enkelt, snabbt och effektivt"
            />
          </div>
          <div className="mx-auto gap-16 xl:gap-[4rem] lg:grid lg:grid-cols-2">
            <div className="font-light order-0">
              <div className="space-y-6 divide-y">
                <h2 className="text-4xl tracking-tight font-bold">Byggbranschens kvinnor</h2>
                <p className="md:text-2xl whitespace-pre-line pt-6">
                  Byggbranschenskvinnor grundades med en vision att forma världens bästa byggsektor,
                  där alla är välkomna. Vårt uppdrag är att säkerställa att kvinnor kan förverkliga
                  sina drömmar och visioner. Vi främjar modet att utbilda sig inom sina yrken och
                  strävar efter att eliminera hinder för varje individ.
                </p>
                <button
                  type="button"
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
              src="public/byggsandra011.jpeg"
              alt="Enkelt, snabbt och effektivt"
            />
            <button
              type="button"
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
                  Jag har haft förmånen att få synas i flera olika medier och kanaler.{"\n"}Där har
                  jag fått möjlighet att dela med mig av mina tankar och idéer om byggbranschen, och
                  hur vi kan göra den mer jämställd och innovativ.
                </p>
              </div>
            </div>
            <img
              className="rounded-md"
              draggable="false"
              src="public/byggsandra004.bmp"
              alt="Enkelt, snabbt och effektivt"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
