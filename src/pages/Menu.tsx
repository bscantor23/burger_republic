import coronaImage from "/corona.svg";
import SwiperProducts from "../components/SwiperProducts";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Menu = () => {
  const [hamburguers, setHamburguers] = useState([]);
  const [drinks, setDrinks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/products");
        const data = await response.json();
        setHamburguers(data.filter((_: any) => _.categoryId === 1));
        setDrinks(data.filter((_: any) => _.categoryId === 2));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
        <SwiperProducts title="Principal" dataMock={hamburguers} />
        <SwiperProducts title="Bebidas" dataMock={drinks} time={2000} />
      </div>
    </>
  );
};

export default Menu;
