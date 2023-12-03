interface Link {
  name: string;
  href: string;
  external?: boolean;
}

interface FooterLink {
  title: string;
  links: Link[];
}

export const data: FooterLink[] = [
  {
    title: "Hitta mig här",
    links: [{ name: "Byggbranschens kvinnor", href: "", external: true }],
  },
];
