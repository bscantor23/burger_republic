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
import { Product } from "../mockData/product-mock";

type SwiperProductsProps = {
  title: string;
  dataMock: Product[];
  time?: number;
};

const SwiperProducts: React.FC<SwiperProductsProps> = ({
  title,
  dataMock,
  time,
}) => {
  return (
    <>
      <div className="container flex flex-row justify-center py-5">
        <h1 className="text-primary font-bold text-5xl text-center">{title}</h1>
      </div>
      <section className="container-fluid mx-20 py-5">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          centeredSlides={true}
          autoplay={{
            delay: time ?? 4000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          loop={true}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {dataMock.map((item: any) => (
            <SwiperSlide>
              <article className="container-fluid flex-col justify-center text-center align-middle pb-14">
                <div className="container-fluid flex flex-row justify-center py-2">
                  <img
                    src={item.img}
                    alt="image"
                    className="card__img object-fit max-h-[200px]"
                  />
                </div>
                <h2 className="font-montserrat text-black font-semibold text-3xl">
                  {item.title}
                </h2>
                <h1 className="font-montserrat text-primary font-semibold text-4xl py-2">
                  ${" "}
                  {Number(item.price).toLocaleString("es-ES", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                    useGrouping: true,
                  })}
                </h1>
                <div className="container-fluid flex flex-row justify-center">
                  <p
                    className={`text-normal max-w-[400px] self-center text-center text-lg py-5 ${
                      item.description.length > 40 ? "h-[130px]" : ""
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
                <div className="container flex flex-row justify-center">
                  <button className="hover:bg-primary text-primary font-semibold hover:text-white rounded-xl border-2 border-primary px-6 py-2 duration-200">
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
    </>
  );
};

export default SwiperProducts;
