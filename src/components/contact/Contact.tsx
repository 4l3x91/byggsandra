import socials from "../../shared/data/socials";
import ContactForm from "../forms/contact/ContactForm";
import { data } from "./data";

const Contact = () => {
  return (
    <section
      className={`
    px-4 py-16 z-10 relative bg-white
    `}
    >
      <div className="bg-shape" />
      <div className="max-w-screen-2xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="tracking-tight font-semibold text-4xl sm:text-6xl md:text-7xl">
              Kom i kontakt med mig!
            </h2>
            <h6 className="mt-4 mb-6 md:mb-12 text-xl md:text-2xl whitespace-pre-line">
              Önskar du komma i kontakt med mig? Fyll i formuläret så återkommer jag så snart jag
              kan. Du kan även nå mig på telefon och email.
            </h6>

            <div className="md:grid md:grid-cols-2 mb-12">
              {data.map((item, index) => (
                <div key={index}>
                  <h6 className="mt-8 mb-4 lg:mt-6 last:text-xl md:text-2xl whitespace-pre-line">
                    {item.title}
                  </h6>
                  <div className="space-y-4">
                    {item.contacts.map((contact, index) => (
                      <a
                        key={index}
                        href={`${
                          contact.type === "tel"
                            ? `tel:${contact.link}`
                            : `mailto:${contact.link}?subject=${contact.subject}`
                        }`}
                        className="flex gap-2 items-center group hover:text-violet-600 transition-all duration-200 w-fit cursor-pointer"
                      >
                        <contact.icon size={24} />
                        <p className="text-lg md:text-xl border-b-2 border-black group-hover:border-violet-600 transition-all duration-200">
                          {contact.description}
                        </p>
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="flex items-center gap-4 mt-12 lg:mt-24 justify-center lg:justify-normal">
          {socials.map((link, index) => (
            <a key={index} href={link.path} target="_blank" className="hover:text-violet-600">
              {<link.icon size={48} />}
            </a>
          ))}
          <h6 className="text-xs hidden md:block">Följ mig på sociala medier!</h6>
        </div>
      </div>
    </section>
  );
};

export default Contact;
