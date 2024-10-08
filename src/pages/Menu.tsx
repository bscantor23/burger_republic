import coronaImage from "../assets/corona.svg";
import SwiperProducts from "../components/SwiperProducts";
import { DrinksMock, ProductsMock } from "../mockData/product-mock";

const Menu = () => {
  return (
    <>
      <div className="container-fluid flex flex-col text-center md:min-h-[1700px] mt-24">
        <div>
          <div className="relative mb-32 flex justify-center">
            <img
              src={coronaImage}
              alt=""
              className="absolute top-0 ml-72 w-40"
            />
          </div>
          <h1 className="text-7xl text-primary font-poppins font-bold whitespace-nowrap w-min-{320}">
            BURGER
          </h1>
        </div>
        <SwiperProducts title="Principal" dataMock={ProductsMock} />
        <SwiperProducts title="Bebidas" dataMock={DrinksMock} time={2000} />
      </div>
    </>
  );
};

export default Menu;
