import { useEffect, useRef, useState } from "react";
import Card from "./index";
import { cardDataProps } from "../../utils/staticData";

const Carousel = ({ cardData }: { cardData: cardDataProps[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  useEffect(() => {
    const autoplayCarousel = () => {
      const carousel = carouselRef.current;

      if (carousel) {
        const cardWidth = carousel.children[0].getBoundingClientRect().width + 16; 
        const maxScrollPosition = carousel.scrollWidth - carousel.clientWidth;

        let newPosition = scrollPosition + cardWidth;

        if (newPosition >= maxScrollPosition) {
          newPosition = 0; 
        }

        setScrollPosition(newPosition);

        carousel.scrollTo({
          left: newPosition,
          behavior: "smooth",
        });
      }
    };

    const interval = setInterval(autoplayCarousel, 3000);
    return () => clearInterval(interval);
  }, [scrollPosition]);

  return (
    <div className="overflow-hidden">
      <div
        ref={carouselRef}
        className="flex justify-start items-center gap-4 px-2 relative"
        id="food-carousel"
      >
        {[...cardData, ...cardData].map((card, index) => (
          <Card key={index} name={card.foodName} img={card.foodImage} />
        ))}
      </div>
    </div>
  );
};

export default Carousel;

