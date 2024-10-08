import principalImage from "../assets/principal.svg";
import coronaImage from "../assets/corona.svg";
import lechugaImage from "../assets/lechuga.svg";

const Home = () => {
  return (
    <div className="container-fluid sm:columns-2 flex flex-col md:flex-row gap-x-5 justify-between items-center md:min-h-[1100px] lg:min-h-[900px] lg:h-screen">
      <div className="ml-20 mt-40 md:mt-0 flex justify-center w-full">
        <div>
          <div className="relative mb-32 mr-32">
            <img src={coronaImage} alt="" className="animate-[bounce_8s_infinite] absolute top-0 right-0" />
          </div>
          <h1 className="font-bold text-primary text-8xl py-10">BURGER</h1>
            <div className="relative">
              <img
              src={lechugaImage}
              alt=""
              className="absolute bottom-0 right-0 mb-5 mr-12 w-40 md:hidden lg:block"
              />
              <div className="md:max-w-lg relative">
              <h2 className="font-bold font-montserrat font-black text-5xl">
              ¡MORDIDAS! <br /> QUE
              <span className="text-primary"> CONQUISTAN</span>
              </h2>
              </div>
            </div>
          <div className="md:max-w-2xl py-10">
            <p className="text-normal font-regular text-xl">
              Ya sea que busques una combinación clásica o te atrevas a probar
              algo nuevo, aquí encontrarás el equilibrio perfecto entre lo
              artesanal y lo delicioso.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full flex justify-end pl-10">
        <img
          src={principalImage}
          alt="Principal"
          className="w-full md:min-w-[500px] md:max-w-[650px]"
        />
      </div>
    </div>
  );
};

export default Home;
