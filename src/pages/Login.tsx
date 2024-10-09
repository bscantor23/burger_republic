import loginImage from "/assets/login.svg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { validateFormController } from "../contollers/login";
import Modal from "../components/Modal";

interface LoginProps {
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = ({ setIsLoggedIn }: LoginProps) => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const validateForm = async (event: React.FormEvent<HTMLFormElement>) => {
    try {
      event.preventDefault();
      const user = await validateFormController(
        new FormData(event.currentTarget)
      );
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Sesión iniciada exitosamente.", {
          theme: "colored",
          position: "top-right",
        });
        setIsLoggedIn(true);
        navigate("/");
      } else {
        toast.error("No se encuentra un usuario registrado.", {
          theme: "colored",
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="container-fluid lg:columns-2 flex flex-col lg:flex-row justify-between items-center md:min-h-[1050px] md:h-screen">
      <div className="container mt-40 lg:mt-0 flex flex-col text-center">
        <h1 className="font-bold text-black text-8xl py-10">LOGIN</h1>
        <h2 className="font-regular font-montserrat text-normal text-2xl pb-3">
          ¡Bienvenido de nuevo! Por favor ingrese sus datos
        </h2>
        <div className="container-fluid flex flex-row justify-center p-5">
          <form
            className="space-y-3 max-w-[500px] w-full"
            onSubmit={validateForm}
          >
            <div>
              <label
                htmlFor="email"
                className="block text-left text-xl font-medium text-gray-700"
              >
                Correo <span className="text-primary font-bold">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-lg"
                required
              />
            </div>
            <div>
              <label
                htmlFor="fullName"
                className="block text-left text-lg font-medium text-gray-700"
              >
                Contraseña <span className="text-primary font-bold">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-lg"
                required
              />
            </div>
            <div className="flex justify-center">
              <hr className="border-primary border-2 w-[100px] my-2 p-0" />
            </div>
            <div className="pt-5">
              <button
                type="submit"
                onClick={() => setIsLoggedIn(true)}
                className="block w-full justify-center py-2 px-20 border border-transparent shadow-sm text-lg font-medium rounded-xl text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Iniciar sesión
              </button>
            </div>
            <div className="pt-5">
              <button
                type="button"
                className="block w-full justify-center py-2 px-20 border-2 border-primary shadow-sm text-lg font-medium rounded-xl text-primary bg-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                onClick={() => setShowModal(true)}
              >
                Registrarse
              </button>
            </div>
          </form>
          {showModal && <Modal setShowModal={setShowModal} action={"create"} />}
        </div>
      </div>

      <div className="w-full lg:flex justify-end hidden">
        <img src={loginImage} alt="Principal" className="md:w-[700px]" />
      </div>
    </div>
  );
};

export default Login;
