import CarouselHome from "../components/Carousel";
import { ButtonBox } from "../components/ButtonBox";
import { Button } from "../components/ui";
import { useNavigate } from "react-router-dom";

export default function HomePage() {

  const navigate = useNavigate();
  const handleProducts = () => {
    // navigate("/detail", { state: { character } });
    navigate("/product");
  };


  return (
    <>
      <div className="text-transparent w-full grid grid-cols-1 justify-between items-center content-center gap-x-10 gap-y-3 mt-9 ">
        <div className="row-span-1 w-5/6 lg:w-2/5 justify-center justify-self-center px-2  ">
          <CarouselHome />
        </div>
        <div className="row-span-1 w-5/6 lg:w-2/5 justify-self-center justify-around ">
          <ButtonBox/>
        </div>
        <div className="row-span-3 row-start-3 h-full w-5/6 lg:w-2/5 justify-self-center px-2">
          <Button onClick={handleProducts}> TODOS LOS PRODUCTOS </Button>
        </div>
      </div>
    </>
  );
}
