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
  type: "tel" | "mail";
  subject?: string;
}
export const data: Contact[] = [
  {
    title: "Allmänna frågor",
    contacts: [
      {
        icon: FaPhoneAlt,
        description: "Ring mig",
        link: "+46702122045",
        type: "tel",
      },
      {
        icon: TbMail,
        description: "Skicka mail",
        link: "sandra@byggsandra.se",
        type: "mail",
        subject: "Allmän fråga",
      },
    ],
  },
  {
    title: "Samarbeten",
    contacts: [
      {
        icon: TbMail,
        description: "Joint Ventures",
        link: "sandra@byggsandra.se",
        type: "mail",
        subject: "Samarbeten | Joint Ventures",
      },
      {
        icon: TbMail,
        description: "Produktsamarbete",
        link: "sandra@byggsandra.se",
        type: "mail",
        subject: "Samarbeten | Produktsamarbete",
      },
      {
        icon: TbMail,
        description: "Workshop & utbildning",
        link: "sandra@byggsandra.se",
        type: "mail",
        subject: "Samarbeten | Workshop & utbildning",
      },
    ],
  },
];
