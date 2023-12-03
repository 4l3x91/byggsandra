import { Service } from "../../shared/services";

interface Props {
  services: Service[];
  currentService: Service;
  setCurrentService: React.Dispatch<React.SetStateAction<Service>>;
}
const BigServices = ({ services, currentService, setCurrentService }: Props) => {
  return (
    <div className="grid grid-cols-12 gap-8 xl:gap-24 border-t pt-8">
      <div className="flex flex-col col-span-7 pr-4">
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
        <div className="space-y-4">
          {services.map((service, index) => (
            <div
              className={`cursor-pointer grid grid-cols-12 items-center bg-white text-black overflow-hidden rounded-2xl transition-all duration-500 ${
                currentService === service ? "opacity-100" : "opacity-50 hover:opacity-100"
              }`}
              onClick={() => setCurrentService(services[index])}
              key={service.name}
            >
              <img src={service.image} height={"100%"} className="col-span-4 overflow-hidden" />
              <div className="col-span-8 px-4 ">
                <div className="text-lg lg:text-xl tracking-tight font-bold">{service.name}</div>
                <p>{service.shortDescription}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BigServices;
