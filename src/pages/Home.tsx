import principalImage from "../assets/principal.svg";
import coronaImage from "../assets/corona.svg";
import lechugaImage from "../assets/lechuga.svg";

const Home = () => {
  return (
    <div className="container-fluid columns-2 flex justify-between items-center md:min-h-[calc(100vh-80px)]">
      <div className="ml-20 flex justify-center w-full">
        <div>
          <div className="relative mb-32 mr-32">
            <img src={coronaImage} alt="" className="absolute top-0 right-0" />
          </div>
          <h1 className="font-bold text-primary text-8xl py-10">BURGER</h1>
          <div className="relative">
            <img
              src={lechugaImage}
              alt=""
              className="absolute bottom-0 right-0 mb-5 mr-12 w-40"
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

      <div className="w-full flex justify-end">
        <img
          src={principalImage}
          alt="Principal"
          className="md:w-[700px]"
        />
      </div>
    </div>
  );
};

export default Home;
