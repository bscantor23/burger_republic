import { Link } from "react-router-dom";
import loginImage from "../assets/login.svg";

interface LoginProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Login: React.FC<LoginProps> = (props: LoginProps) => {
  return (
    <div className="container-fluid columns-2 flex justify-between items-center md:min-h-[calc(100vh-80px)]">
      <div className="container flex flex-col text-center max-w-[1000px]">
        <h1 className="font-bold text-black text-8xl py-10">LOGIN</h1>
        <h2 className="font-regular font-montserrat text-normal text-2xl pb-3">
          ¡Bienvenido de nuevo! Por favor ingrese sus datos
        </h2>
        <div className="container pt-5">
          <form className="space-y-3">
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
              <Link
                to="/"
                onClick={() => props.setIsLoggedIn(true)}
                className="block w-full justify-center py-2 px-20 border border-transparent shadow-sm text-lg font-medium rounded-xl text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Iniciar sesión
              </Link>
            </div>
            <div className="pt-5">
              <button
                type="submit"
                className="block w-full justify-center py-2 px-20 border-2 border-primary shadow-sm text-lg font-medium rounded-xl text-primary bg-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Registrarse
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="w-full flex justify-end">
        <img src={loginImage} alt="Principal" className="md:w-[700px]" />
      </div>
    </div>
  );
};

export default Login;
