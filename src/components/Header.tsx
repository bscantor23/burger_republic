import { MenuMock } from "../mockData/menu-mock";

import { PiShoppingCartThin } from "react-icons/pi";
import { MdMenu } from "react-icons/md";
import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

import { Link } from "react-router-dom";

interface HeaderProps {
  isLoggedIn: boolean;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white z-10">
        <div className="container px-0 flex justify-between items-center py-10">
          <div className="flex items-center gap-2">
            <Link
              to="/"
              className="text-4xl text-primary font-poppins font-bold whitespace-nowrap w-min-{320}"
            >
              BURGER REPUBLIC
            </Link>
          </div>
          <div className="container gap-x-10 flex justify-end items-center">
            <div className="hidden md:block">
              <ul className="flex items-center gap-6 text-normal">
                {MenuMock.filter(
                  (item: any) => item.permission === props.isLoggedIn
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
            <div className="flex items-center gap-4">
              {props.isLoggedIn ? (
                <Link
                  to="/"
                  className="hover:bg-primary text-primary hidden md:block font-semibold hover:text-white rounded-xl border-2 border-primary px-6 py-2 duration-200"
                  onClick={() => props.setIsLoggedIn(false)}
                >
                  Cerrar Sesión
                </Link>
              ) : (
                <Link
                  to="/login"
                  className="hover:bg-primary text-primary hidden md:block font-semibold hover:text-white rounded-xl border-2 border-primary px-6 py-2 duration-200"
                >
                  Iniciar Sesión
                </Link>
              )}
              <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
                <PiShoppingCartThin className="text-3xl" />
              </button>
            </div>
            <div className="md:hidden" onClick={() => setOpen(!open)}>
              <MdMenu className="text-4xl" />
            </div>
          </div>
        </div>
      </nav>
      <ResponsiveMenu open={open} />
    </>
  );
};

export default Header;
