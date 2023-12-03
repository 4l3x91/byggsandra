import { RiFacebookFill } from "react-icons/ri";
import { RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { SiYoutube } from "react-icons/si";

export interface Social {
  title: string;
  path: string;
  icon: React.ElementType;
}

export const socials: Social[] = [
  {
    title: "Instagram",
    path: "https://www.instagram.com/byggsandra/",
    icon: RxInstagramLogo,
  },
  {
    title: "Facebook",
    path: "https://www.facebook.com/byggsandra",
    icon: RiFacebookFill,
  },
  {
    title: "LinkedIn",
    path: "https://se.linkedin.com/in/sandra-byggsandra-mobaraki-30059480",
    icon: RxLinkedinLogo,
  },
  {
    title: "Youtube",
    path: "https://www.youtube.com/@byggsandra7564",
    icon: SiYoutube,
  },
];
export default socials;
