// import { useEffect, useRef, useState } from "react";
// import Card from "./index";
// import { cardDataProps } from "../../utils/staticData";

// const Carousel = ({ cardData }: { cardData: cardDataProps[] }) => {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const [scrollPosition, setScrollPosition] = useState(0);

//   useEffect(() => {
//     const autoplayCarousel = () => {
//       const carousel = carouselRef.current;

//       if (carousel) {
//         const cardWidth = carousel.children[0].clientWidth + 16; // Include gap
//         const maxScrollPosition = carousel.scrollWidth - carousel.clientWidth;

//         let newPosition = scrollPosition + cardWidth;

//         if (newPosition > maxScrollPosition) {
//           newPosition = 0;
//         }

//         setScrollPosition(newPosition);

//         carousel.scrollTo({
//           left: newPosition,
//           behavior: "smooth",
//         });
//       }
//     };

//     const interval = setInterval(autoplayCarousel, 3000); // Change every 3 seconds
//     return () => clearInterval(interval); // Cleanup on unmount
//   }, [scrollPosition]);

//   return (
//     <div className="overflow-hidden">
//       <div
//         ref={carouselRef}
//         className="flex justify-start items-center gap-4 px-2 relative"
//         id="food-carousel"
//       >
//         {cardData.map((card) => (
//           <Card key={card.id} name={card.foodName} img={card.foodImage} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Carousel;


import { useEffect, useRef } from "react";
import Card from "./index";
import { cardDataProps } from "../../utils/staticData";

const Carousel = ({ cardData }: { cardData: cardDataProps[] }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0); // Use a ref to track scroll position

  useEffect(() => {
    const autoplayCarousel = () => {
      const carousel = carouselRef.current;

      if (carousel && carousel.children.length > 0) {
        const cardWidth = carousel.children[0].clientWidth + 16; // Include gap
        const maxScrollPosition = carousel.scrollWidth - carousel.clientWidth;

        let newPosition = scrollPositionRef.current + cardWidth;

        if (newPosition > maxScrollPosition) {
          newPosition = 0; // Reset to the start
        }

        scrollPositionRef.current = newPosition; // Update the ref
        carousel.scrollTo({
          left: newPosition,
          behavior: "smooth",
        });
      }
    };

    const interval = setInterval(autoplayCarousel, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array to run only on mount

  return (
    <div className="overflow-hidden">
      <div
        ref={carouselRef}
        className="flex justify-start items-center gap-4 px-2 relative"
        id="testimonial-carousel"
      >
        {
          cardData.map((card) => (
            <Card key={card.id} name={card.foodName} img={card.foodImage} />
          ))
        }

      </div>
    </div>
  );
};

export default Carousel;

