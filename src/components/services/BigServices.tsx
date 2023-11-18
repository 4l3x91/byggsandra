import { Service } from "../../data/services";

interface Props {
  services: Service[];
  currentService: Service;
  setCurrentService: React.Dispatch<React.SetStateAction<Service>>;
}
const BigServices = ({ services, currentService, setCurrentService }: Props) => {
  return (
    <div className="grid grid-cols-12 gap-8 xl:gap-24 border-t pt-8">
      <div className="flex flex-col col-span-7 border-r pr-4">
        <h5 className="text-4xl tracking-tight font-bold">{currentService.name}</h5>
        <h6 className="my-auto text-2xl whitespace-pre-line">{currentService.description}</h6>
        <a
          href="#"
          className="bg-white text-black hover:bg-black hover:text-white font-medium rounded-lg text-xs md:text-sm px-5 py-2.5 text-center items-center lg:w-fit"
        >
          Kontakta mig
        </a>
      </div>
      <div className="col-span-5 transition-all duration-500">
        <div className="p-4 divide-y">
          {services.map((service, index) => (
            <div
              className={`${currentService === service ? "active-service" : ""}`}
              key={service.name}
            >
              <div
                key={service.name}
                className={`${
                  service === currentService ? "opacity-100" : "opacity-50"
                } mb-2 mt-auto cursor-pointer
        ${index !== 0 && index !== services.length - 1 ? "py-4" : ""}
        ${index === 0 ? "pb-4" : ""}
        ${index === services.length - 1 ? "pt-4" : ""}
        `}
                onClick={() => setCurrentService(services[index])}
              >
                <div className="flex items-center lg:items-top">
                  <div className="mr-4">
                    <service.icon size={48} />
                  </div>
                  <div>
                    <div className="text-lg lg:text-xl tracking-tight font-bold">
                      {service.name}
                    </div>
                    <p>{service.shortDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigServices;
