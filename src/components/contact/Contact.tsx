import socials from "../../shared/data/socials";
import ContactForm from "../forms/contact/ContactForm";

const Contact = () => {
  return (
    <section
      className={`
    px-4 py-16 z-10 relative bg-gradient-to-b duration-500 transition-all animate-background from-white via-white to-stone-200
    `}
      >
          <div className="bg-shape" />
      <div className="max-w-screen-2xl mx-auto">
        <div>
          <h2 className="tracking-tight font-semibold text-4xl sm:text-6xl md:text-7xl">
            Kom i kontakt med mig!
          </h2>
          <h6 className="mt-4 mb-6 md:mb-12 text-xl md:text-2xl whitespace-pre-line">
            Önskar du komma i kontakt med mig? Fyll i formuläret nedan så återkommer jag så snart
            jag kan.{"\n\n"}Jag finns även på sociala medier, där du kan följa mig och mitt arbete.
          </h6>
          <ContactForm />
          <div className="flex justify-center items-center gap-4 mt-8">
            {socials.map((link, index) => (
              <a key={index} href={link.path} target="_blank" className="hover:text-fuchsia-800">
                {<link.icon size={48} />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
