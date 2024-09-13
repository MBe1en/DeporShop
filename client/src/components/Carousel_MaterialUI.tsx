// import { Carousel } from "@material-tailwind/react";
// import type { CarouselProps } from "@material-tailwind/react";
import Carousel from "react-material-ui-carousel";
// import { addidas , nike, underarmour} from '../assets/addidas.jpg';

export function CarouselHome() {
  let slides = [
    // "/assets/addidas.jpg",
    "/assets/adidas2.jpg",  
    // "/assets/underarmour.jpg",
    "/assets/underarmour2.jpg",
    "/assets/nike.jpg",
    // "/assets/gym.jpg",
    "/assets/gym2.jpeg",
  ];

  return (
    <Carousel
      animation="slide"
      indicators={true}
      navButtonsAlwaysInvisible={false}
      cycleNavigation={true}
      fullHeightHover={false}
      height="25vh"
      sx={{
        width: "100%",
        flexGrow: 0,
        margin: "auto",
        mt: 2,
        objectFit: "fill"  
         }}
    >
      {slides.map((s, index) => {
        return (
          <div
            key={index}
            // className="w-full carousel p-4 flex items-center justify-center scroll-smooth scrollbar-hide"
            className="w-full carousel p-4 scroll-smooth scrollbar-hide"
          >
            <img className="rounded-sm shadow-lg" src={s} alt={s.slice(8)} />
          </div>
        );
      })}
    </Carousel>
  );
}
