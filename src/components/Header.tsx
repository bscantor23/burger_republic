import { MenuMock } from "../mockData/menu-mock";

import {
  MdShoppingCart,
  MdMenu,
  MdOutlineLogout,
  MdOutlineLogin,
} from "react-icons/md";

import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, setIsLoggedIn }) => {
  const [open, setOpen] = useState(false);

  const notAuthorized = () => {
    toast.info("No tiene los permisos necesarios para realizar esta acción.", {
      theme: "colored",
      position: "top-right",
    });
  };

  const handleOpen = () => {
    setOpen(false);
    if (isLoggedIn) {
      setIsLoggedIn(false);
      localStorage.removeItem("user");
      toast.success("Sesión cerrada exitosamente.", {
        theme: "colored",
        position: "top-right",
      });
    }
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-slate-50 z-20 shadow-md py-8">
        <div className="container-fluid px-10 lg:px-32 flex justify-between items-center">
          <div className="flex items-center px-5">
            <Link
              to="/"
              className="text-4xl text-primary font-poppins font-bold whitespace-nowrap w-min-{320}"
              onClick={() => setOpen(false)}
            >
              BURGER REPUBLIC
            </Link>
          </div>
          <div className="container-fluid gap-4 flex justify-end items-center">
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4 text-normal">
                {MenuMock.filter(
                  (item: any) => item.permission === isLoggedIn
                ).map((item: any) => (
                  <li key={item.id}>
                    <Link
                      to={item.link}
                      className="inline-block py-1 px-3 hover:text-primary font-regular text-normal"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:hidden">
              <Link
                to={isLoggedIn ? "/" : "/login"}
                className="text-2xl hover:animate-pulse text-primary hover:text-orange-800 duration-200"
                onClick={handleOpen}
              >
                <span>
                  {isLoggedIn ? (
                    <MdOutlineLogout className="inline-block" />
                  ) : (
                    <MdOutlineLogin className="inline-block" />
                  )}
                </span>
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <Link
                to={isLoggedIn ? "/" : "/login"}
                className="hover:bg-primary min-w-[150px] text-center text-primary hidden md:block font-semibold hover:text-white rounded-xl border-2 border-primary py-2 duration-200"
                onClick={handleOpen}
              >
                <span>{isLoggedIn ? "Cerrar sesión" : "Iniciar sesión"}</span>
              </Link>
              <button
                className="text-2xl hover:animate-pulse text-primary hover:text-orange-800 duration-200"
                onClick={notAuthorized}
              >
                <MdShoppingCart className="text-3xl" />
              </button>
            </div>
            <div className="lg:hidden" onClick={() => setOpen(!open)}>
              <MdMenu className="text-4xl" />
            </div>
          </div>
        </div>
      </nav>
      <ResponsiveMenu isLoggedIn={isLoggedIn} open={open} setOpen={setOpen} />
    </>
  );
};

export default Header;
