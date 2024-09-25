import { FiFacebook, FiInstagram, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <>
      <div className="bg-secondary md:h-64 text-white w-full container-fluid md:columns-3">
        <div className="container h-full flex flex-col text-center justify-center">
          <h3 className="font-bold text-3xl py-5">SUCURSALES</h3>
          <p>Cra 98 No. 89 Norte - Chicó</p>
          <p>Cra 73 I No. 62 a Sur - Galicia</p>
        </div>
        <div className="container h-full flex flex-col text-center justify-center">
          <h3 className="font-bold text-4xl py-5">BURGUER REPUBLIC</h3>
          <div className="container flex text-3xl flex-row justify-center gap-5">
            <FiFacebook />
            <FiInstagram />
            <FiMail />
            <FiMapPin />
          </div>
        </div>
        <div className="container h-full flex flex-col text-center justify-center">
          <h3 className="font-bold text-3xl py-5">DISPONIBILIDAD</h3>
          <p>Lunes a Viernes 12:00am - 8:00pm</p>
          <p>
            Sábados, Domingos, Festivos <br />
            10:00am - 10:00pm
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
