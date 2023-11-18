import { Service } from "../../data/services";

interface Props {
  services: Service[];
}

const SmallServices = ({ services }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-[24rem] md:max-w-none ">
      {services.map((service) => (
        <div className="border rounded overflow-hidden flex flex-col" key={service.name}>
          <div className="flex justify-center">
            <img className="max-h-[200px] md:max-h-full object-cover" src={service.image} width="100%" height="100%" />
          </div>
          <div className="p-4 mb-auto">
            <div className="text-2xl mb-4 text-center tracking-tight font-bold">{service.name}</div>
            <p className="text-center">{service.description}</p>
          </div>
          <div className="text-center border rounded py-2 m-4 text-black bg-white">Läs mer</div>
        </div>
      ))}
    </div>
  );
};

export default SmallServices;
