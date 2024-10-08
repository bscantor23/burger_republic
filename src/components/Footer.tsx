import { FiFacebook, FiInstagram, FiMail, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="md:absolute md:bottom-0 bg-secondary mt-5 p-5 text-white w-full container-fluid flex justify-center flex-col md:flex-row md:columns-3 gap-5">
      <div className="container-fluid flex-1 text-center">
        <div className="flex h-full flex-col justify-center">
          <h3 className="font-bold text-3xl py-5">SUCURSALES</h3>
          <p>Cra 98 No. 89 Norte - Chicó</p>
          <p>Cra 73 I No. 62 a Sur - Galicia</p>
        </div>
      </div>
      <div className="container-fluid flex-1 text-center">
        <div className="flex h-full flex-col justify-center">
          <h3 className="font-bold text-4xl py-5">BURGUER REPUBLIC</h3>
          <div className="container-fluid flex flex-row justify-center gap-5">
            <FiFacebook className="text-[30px]" />
            <FiInstagram className="text-[30px]" />
            <FiMail className="text-[30px]" />
            <FiMapPin className="text-[30px]" />
          </div>
        </div>
      </div>
      <div className="container-fluid flex-1 text-center">
        <div className="flex h-full flex-col justify-center">
          <h3 className="font-bold text-3xl py-5">DISPONIBILIDAD</h3>
          <p>Lunes a Viernes 12:00am - 8:00pm</p>
          <p>
            Sábados, Domingos, Festivos <br />
            10:00am - 10:00pm
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
