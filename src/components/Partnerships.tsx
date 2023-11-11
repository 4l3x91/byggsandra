const Partnerships = () => {
  const partners = [
    {
      name: "Åkesundsvägen",
      image: "https://byggsandra.se/wp-content/uploads/2020/10/akesundsvll2.png",
      shouldBeInverted: true,
    },
    {
      name: "Cramo",
      image: "https://byggsandra.se/wp-content/uploads/2020/10/cramo-logo-svarat.png",
      shouldBeInverted: false,
    },
    {
      name: "Bygglet",
      image: "https://byggsandra.se/wp-content/uploads/2020/10/bygglet3.png",
      shouldBeInverted: true,
    },
    {
      name: "Åkesundsvägen",
      image: "https://byggsandra.se/wp-content/uploads/2020/10/akesundsvll-kopia3.png",
      shouldBeInverted: true,
    },
    {
      name: "Byggmaterialhandlarna",
      image: "https://byggsandra.se/wp-content/uploads/2020/10/byggmaterialhandlarna3.png",
      shouldBeInverted: true,
    },
    {
      name: "Boinst",
      image: "https://byggsandra.se/wp-content/uploads/2020/10/boinstat.png",
      shouldBeInverted: true,
    },
    {
      name: "SSH Bygg",
      image: "https://byggsandra.se/wp-content/uploads/2020/10/sshbygg4.png",
      shouldBeInverted: true,
    },
    {
      name: "Nordbygg",
      image: "https://byggsandra.se/wp-content/uploads/2020/10/nordbygg-kopia2.png",
      shouldBeInverted: true,
    },
  ];
  const duplicatedPartners = [...partners, ...partners];
  return (
    <div className="slider absolute left-0 right-0">
      <div className="slide-track">
        {duplicatedPartners.map((partner) => (
          <div
            className="slide bg-contain bg-no-repeat bg-center"
            key={partner.name}
            style={{ backgroundImage: `url(${partner.image})`, filter: partner.shouldBeInverted ? "invert(1)" : "invert(0)" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Partnerships;
