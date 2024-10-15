import { ImgButton } from "./ui/ImgButton";

export function ButtonBox() {
  // let imagesSrc = [
  //     "/public/assets/indumentaria.jpg",
  //     "/public/assets/zapatillas.jpg",
  //     "/public/assets/accesorios2.jpg",
  //   ];

  const imagesSrc = [
    ["/public/assets/indumentaria.jpg", "INDUMENTARIA"],
    ["/public/assets/zapatillas.jpg", "CALZADO"],
    ["/public/assets/accesorios2.jpg", "ACCESORIOS"],
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      {imagesSrc.map((s, index) => {
        return (
          <div key={index} className="p-2 object-cover">
            <ImgButton key={index} src={s[0]} title={s[1]} />
          </div>
        );
      })}
    </div>
  );
}
