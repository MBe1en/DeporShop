import  {ImgButton}  from "./ui/ImgButton";

export function ButtonBox() {
  // let imagesSrc = [
  //     "/public/assets/indumentaria.jpg",
  //     "/public/assets/zapatillas.jpg",
  //     "/public/assets/accesorios2.jpg",
  //   ];

  const imagesSrc = [
    ["/public/assets/indumentaria.jpg", "INDUMENTARIA", "6643f9a197f1929a633c52eb"],
    ["/public/assets/zapatillas.jpg", "CALZADO", "6643fca697f1929a633c52f1"],
    ["/public/assets/accesorios2.jpg", "ACCESORIOS", "6643fcaf97f1929a633c52f4"],
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      {imagesSrc.map((s, index) => {
        return (
          <div key={index} className="p-2 object-cover">
            <ImgButton key={index} src={s[0]} title={s[1]} id={s[2]} />
          </div>
        );
      })}
    </div>
  );
}
