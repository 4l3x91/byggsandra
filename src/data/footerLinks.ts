interface Link {
  name: string;
  href: string;
  external?: boolean;
}

interface FooterLink {
  title: string;
  links: Link[];
}

export const footerLinks: FooterLink[] = [
  {
    title: "Länkar",
    links: [
      { name: "Kom i kontakt", href: "/kontakt" },
      { name: "Om mig", href: "/om" },
    ],
  },
  {
    title: "Följ oss",
    links: [
      { name: "Byggbranschens kvinnor", href: "", external: true },
      { name: "Discord", href: "", external: true },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "" },
      { name: "Terms & Conditions", href: "" },
    ],
  },
];
