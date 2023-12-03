import { FaPhoneAlt } from "react-icons/fa";
import { TbMail } from "react-icons/tb";

interface Contact {
  title: string;
  contacts: ContactPartial[];
}

interface ContactPartial {
  icon: React.ElementType;
  description: string;
  link: string;
}
export const data: Contact[] = [
  {
    title: "Allmänna frågor",
    contacts: [
      {
        icon: FaPhoneAlt,
        description: "Ring mig",
        link: "",
      },
      {
        icon: TbMail,
        description: "Skicka mail",
        link: "",
      },
    ],
  },
  {
    title: "Samarbeten",
    contacts: [
      {
        icon: TbMail,
        description: "Joint Ventures",
        link: "",
      },
      {
        icon: TbMail,
        description: "Produktsamarbete",
        link: "",
      },
      {
        icon: TbMail,
        description: "Workshop & utbildning",
        link: "",
      },
    ],
  },
];
