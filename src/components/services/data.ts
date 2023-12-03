import { DiCodepen } from "react-icons/di";
import { FaUserLock } from "react-icons/fa";

export interface Service {
  icon: React.ElementType;
  name: string;
  shortDescription: string;
  description: string;
  link: string;
  image: string;
}

export const data: Service[] = [
  {
    icon: DiCodepen,
    name: "Projektledare",
    image: "byggsandra003.bmp",
    shortDescription:
      "Söker du en projektledare? Jag är en erfaren projektledare som kan hjälpa dig med ditt projekt. ",
    description:
      "Som projektledare har jag ansvar för att leda och driva projektet framåt.\n\nJag ser till att projektet levererar enligt överenskommelse och att det håller sig inom budget och tidsram. Jag är en lagspelare som ser till att alla i teamet har rätt förutsättningar för att kunna göra ett bra jobb.\n",
    link: "",
  },
  {
    icon: FaUserLock,
    name: "Rådgivare",
    image: "byggsandra010.jpeg",
    shortDescription:
      "Behöver du rådgivning? Jag är en erfaren rådgivare som kan hjälpa dig med dina frågor.",
    description:
      "Rådgivarrollen är något jag trivs väldigt bra i. Jag har en förmåga att se helheten och kan därför ge råd och vägledning i olika frågor.\n\nJag är en person som är bra på att lyssna och kan därför ge råd som är anpassade efter den personen jag pratar med.\n",
    link: "",
  },
  {
    icon: DiCodepen,
    name: "Talare",
    image: "byggsandra011.jpeg",
    shortDescription:
      "Söker du en talare? Jag är en erfaren talare som kan hjälpa dig med ditt event.",
    description:
      "Som talare är jag engagerad och inspirerande. Jag har en förmåga att fånga min publik och kan därför hålla ett intressant och givande föredrag.\n\nJag har en förmåga att anpassa mig efter min publik och kan därför hålla föredrag som är anpassade efter den målgrupp jag pratar med.\n",
    link: "",
  },
];
