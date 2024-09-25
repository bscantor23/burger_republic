import coronaImage from "../assets/corona.svg";
import { ProductMock } from "../mockData/product-mock";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Menu = () => {
  return (
    <>
      <div className="container-fluid flex flex-col text-center  md:min-h-[calc(100vh-80px)] mt-[125px]">
        <div>
          <div className="relative mb-32 flex justify-center">
            <img
              src={coronaImage}
              alt=""
              className="absolute top-0 ml-72 w-40"
            />
          </div>
          <h1 className="text-7xl text-primary font-poppins font-bold whitespace-nowrap w-min-{320} py-5">
            BURGER
          </h1>
        </div>
        <section className="container pt-10">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            spaceBetween={50}
            loop={true}
            slidesPerView={3}
            navigation={true}
            pagination={{ clickable: true }}
          >
            {ProductMock.map((item: any) => (
              <SwiperSlide>
                <article className="container-fluid flex-col justify-center text-center align-middle pb-14">
                  <div className="container flex flex-row justify-center py-2">
                    <img
                      src={item.img}
                      alt="image"
                      className="card__img w-64 h-48"
                    />
                  </div>
                  <h2 className="font-montserrat text-black font-semibold text-3xl">
                    {item.title}
                  </h2>
                  <h1 className="font-montserrat text-primary font-semibold text-4xl py-2">
                    $
                    {Number(item.price).toLocaleString("es-ES", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </h1>
                  <p className="text-normal text-lg py-5 h-40">
                    {item.description}
                  </p>

                  <div className="container flex flex-row justify-center">
                    <button className="hover:bg-primary text-primary hidden md:block font-semibold hover:text-white rounded-xl border-2 border-primary px-6 py-2 duration-200">
                      Ordenar
                    </button>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="card__container swiper">
            <div className="card__content">
              <div className="swiper-wrapper"></div>
            </div>

            <div className="swiper-button-next">
              <i className="ri-arrow-right-s-line"></i>
            </div>

            <div className="swiper-button-prev">
              <i className="ri-arrow-left-s-line"></i>
            </div>

            <div className="swiper-pagination"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Menu;
