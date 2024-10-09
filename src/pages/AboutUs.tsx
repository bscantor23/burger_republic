import coronaImage from "/corona.svg";
import hamburguesa_1 from "/assets/hamburguesa_1.png";
import hamburguesa_2 from "/assets/hamburguesa_2.png";
import hamburguesa_3 from "/assets/hamburguesa_5.png";

const AboutUs = () => {
  return (
    <div className="container-fluid flex flex-col text-center md:min-h-[1150px] mt-24">
      <div>
        <div className="relative mb-32 flex justify-center">
          <img src={coronaImage} alt="" className="absolute top-0 ml-72 w-40" />
        </div>
        <h1 className="text-7xl text-primary font-poppins font-bold whitespace-nowrap w-min-{320}">
          BURGER
        </h1>
        <h2 className="font-semibold font-montserrat text-4xl py-5">
          Gracias por ser parte <br />
          <span className="text-primary">de este viaje</span>
        </h2>
        <div className="container flex flex-row justify-between py-5">
          <h1 className="text-primary font-bold text-5xl text-left">1.</h1>
        </div>
        <div className="container flex flex-row justify-between py-5 pb-10">
          <p className="text-normal font-regular text-xl text-left md:max-w-xl">
            A lo largo de los años, nos hemos mantenido fieles a nuestra
            esencia, ofreciendo hamburguesas jugosas con ingredientes frescos y
            locales.
          </p>
          <p className="text-normal mt-5  font-regular text-xl text-right md:max-w-xl">
            Lo que empezó como un sueño entre amigos apasionados por la buena
            comida, rápidamente se convirtió en un referente de la ciudad.
          </p>
        </div>
        <div className="container flex flex-row justify-center">
          <p className="text-normal font-regular text-xl text-center md:max-w-xl">
            Hoy, somos parte de la escena gastronómica bogotana, conocidos por
            nuestra dedicación y calidad.
          </p>
        </div>
        <div className="container flex flex-row justify-between">
          <img src={hamburguesa_1} className="w-1/3 object-contain max-w-[320px]" />
          <img
            src={hamburguesa_2}
            alt=""
            className="w-1/3 object-contain mt-16 max-w-[320px]"
          />
          <img src={hamburguesa_3} alt="" className="w-1/3 object-contain max-w-[320px]" />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
