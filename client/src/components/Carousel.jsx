import { Carousel } from "antd";

function CarouselHome(){
  let slides = [
    "/assets/gym2.jpeg",
    "/assets/adidas2.jpg",
    "/assets/underarmour2.jpg",
    "/assets/nike.jpg", 
  ];

  return (
    <Carousel autoplay> 
    {slides.map((s, index) => {
      return (
   
          <div key={index} className="flex items-center justify-center">
            <img className="w-full h-full object-cover rounded-sm" src={s} alt={s.slice(8)} />
          </div>

        
      );
    })}
  </Carousel>
  )


}

export default CarouselHome
