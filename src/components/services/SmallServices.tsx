import React, { useEffect, useRef, useState } from "react";
import { Service } from "./data";

interface Props {
  services: Service[];
}

const SmallServices = ({ services }: Props) => {
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [activeService, setActiveService] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDown(true);
    e.currentTarget.classList.add("grabbing");
    setStartX(e.pageX - e.currentTarget.offsetLeft);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDown(false);
    e.currentTarget.classList.remove("grabbing");
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDown(false);
    e.currentTarget.classList.remove("grabbing");
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const direction = x > startX ? 1 : -1;
    const walk = Math.abs(x - startX) * direction * 0.75;

    e.currentTarget.scrollBy({
      left: -walk,
      behavior: "smooth",
    });
  };

  const handleBulletClick = (index: number) => {
    setActiveService(index);

    if (sliderRef.current) {
      const serviceElements = sliderRef.current.children as HTMLCollectionOf<HTMLElement>;
      const targetScroll = Array.from(serviceElements)
        .slice(0, index + 1)
        .reduce((totalWidth, service) => totalWidth + service.offsetWidth, 0);

      const startTime = performance.now();
      const duration = 500; // milliseconds

      const animateScroll = (currentTime: number) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const ease = easeInOutCubic(progress);

        sliderRef.current!.scrollLeft =
          ease * (targetScroll - sliderRef.current!.scrollLeft) + sliderRef.current!.scrollLeft;

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  // Easing function for smooth scrolling
  const easeInOutCubic = (t: number) => {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  useEffect(() => {
    const handleScroll = () => {
      if (sliderRef.current) {
        const scrollLeft = sliderRef.current.scrollLeft;
        const cardWidth = sliderRef.current.offsetWidth;
        const activeIndex = Math.round(scrollLeft / cardWidth);
        setActiveService(activeIndex);
      }
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (sliderRef!.current) {
        sliderRef!.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div
        ref={sliderRef}
        className="flex gap-4 mx-auto overflow-auto snap-proximity transition-all duration-500 snap-x"
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        {services.map((service) => (
          <div
            style={{
              scrollSnapAlign: "center",
            }}
            className="border rounded flex flex-col min-w-full sm:min-w-[22rem] md:min-w-0 md:w-[20rem]"
            key={service.name}
          >
            <div className="flex justify-center">
              <img
                draggable="false"
                className="min-h-[200px] object-cover"
                src={service.image}
                alt={service.name}
                width="100%"
                height="100%"
              />
            </div>
            <div className="p-4 mb-auto">
              <div className="text-2xl mb-4 text-center tracking-tight font-bold">
                {service.name}
              </div>
              <p className="text-center">{service.description}</p>
            </div>
            <div className="text-center border rounded py-2 m-4 text-black bg-white">Läs mer</div>
          </div>
        ))}
      </div>
      <div className="md:hidden flex justify-center gap-4 mt-4">
        {services.map((_, index) => (
          <div
            key={index}
            className={`rounded-full border border-black h-4 w-4 cursor-pointer ${
              index === activeService ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => handleBulletClick(index)}
          />
        ))}
      </div>
      Active service: {activeService}
    </>
  );
};

export default SmallServices;
