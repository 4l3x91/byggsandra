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

const SliderComponent = () => {
  const duplicatedImages = [...images, ...images];
  return (
    <div className="slider bg-gradient-to-b from-purple-800 to-purple-700">
      <div className="slide-track">
        {duplicatedImages.map((image) => (
          <div
            className="slide bg-contain bg-no-repeat bg-center"
            key={image}
            style={{ backgroundImage: `url(${image})` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SliderComponent;
