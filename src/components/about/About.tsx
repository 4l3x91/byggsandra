import { data as aboutData } from "./data";

interface Props {
  aboutRef: React.RefObject<HTMLDivElement>;
}

const About = ({ aboutRef }: Props) => {
  return (
    <section className="px-4 py-12 z-50 relative" ref={aboutRef}>
      <div className="max-w-screen-2xl mx-auto py-8 lg:py-14">
        <div className="space-y-12">
          {aboutData.map((data, index) => (
            <div key={index} className="mx-auto gap-16 xl:gap-[4rem] lg:grid lg:grid-cols-2">
              <div className={`font-light ${index % 2 === 0 ? "order-2" : "order-0"}`}>
                <div className="space-y-6 divide-y">
                  <h2 className="text-4xl tracking-tight font-bold">{data.title}</h2>
                  <p className="md:text-2xl whitespace-pre-line pt-6">{data.description}</p>
                </div>
              </div>
              <img
                className="rounded-md"
                draggable="false"
                src={data.image}
                alt="Enkelt, snabbt och effektivt"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
