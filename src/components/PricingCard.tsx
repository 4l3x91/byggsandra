import { Plan } from "../data/plans";

interface Props {
  plan: Plan;
}

const PricingCard = ({ plan }: Props) => {
  return (
    <div
      className="border border-purple-400 rounded-md flex flex-col w-full cursor-default p-4 md:p-6 xl:p-8 text-left md:text-center
      bg-white hover:border-purple-600"
    >
      <div className="flex flex-col justify-between h-full">
        <h3 className="mb-2 text-xl md:text-2xl font-semibold">{plan.name}</h3>
        <p className="font-light sm:text-lg whitespace-pre-line mb-auto mt-auto">
          {plan.description}
        </p>
        <a
          href="#"
          className="mt-4 text-white bg-purple-600 block hover:bg-purple-700 font-medium rounded-sm text-sm py-2.5 text-center"
        >
          Läs mer
        </a>
      </div>
    </div>
  );
};

export default PricingCard;
