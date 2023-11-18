import { partners } from "../data/partners";

const Partnerships = () => {
  const duplicatedPartners = [...partners, ...partners];
  return (
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
            <div className="slider absolute left-0 right-0">
              <div className="slide-track">
                {duplicatedPartners.map((partner) => (
                  <div
                    className="slide bg-contain bg-no-repeat bg-center"
                    key={partner.name}
                    style={{
                      backgroundImage: `url(${partner.image})`,
                      filter: partner.shouldBeInverted ? "invert(1)" : "invert(0)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
