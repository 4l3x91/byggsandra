const images = [
  "https://byggsandra.se/wp-content/uploads/2020/10/akesundsvll2.png",
  "https://byggsandra.se/wp-content/uploads/2020/10/cramo-logo-svarat.png",
  "https://byggsandra.se/wp-content/uploads/2020/10/bygglet3.png",
  "https://byggsandra.se/wp-content/uploads/2020/10/akesundsvll-kopia3.png",
  "https://byggsandra.se/wp-content/uploads/2020/10/byggmaterialhandlarna3.png",
  "https://byggsandra.se/wp-content/uploads/2020/10/boinstat.png",
  "https://byggsandra.se/wp-content/uploads/2020/10/sshbygg4.png",
  "https://byggsandra.se/wp-content/uploads/2020/10/nordbygg-kopia2.png",
];

const Partnerships = () => {
  const duplicatedImages = [...images, ...images];
  return (
    <div className="slider absolute left-0 right-0">
      <div className="slide-track">
        {duplicatedImages.map((image) => (
          <div
            className="slide bg-contain bg-no-repeat bg-center"
            key={image}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
    </div>
  );
};

export default Partnerships;
