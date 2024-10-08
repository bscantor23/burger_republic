import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuMock } from "../mockData/menu-mock";
import { Link } from "react-router-dom";

interface ResponsiveMenuProps {
  isLoggedIn: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({
  isLoggedIn,
  open,
  setOpen,
}) => {
  useEffect(() => {
    let mainContainer = document.getElementById("principal-container");
    if (mainContainer) {
      if (open) {
        mainContainer.style.height = "100vh";
        mainContainer.style.overflow = "hidden";
      } else {
        mainContainer.style.height = "auto";
      }
    }

    // Limpieza al desmontar o cuando el valor cambia
    return () => {
      document.body.style.overflow = "auto"; // Restaurar el scroll al desmontar
    };
  }, [open]);

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute lg:hidden left-0 w-full h-screen z-10 pt-20 bg-primary"
        >
          <div className="text-xl font-semibold uppercase text-white rounded-3xl">
            <ul className="flex flex-col h-screen justify-evenly items-center">
              {MenuMock.filter(
                (item: any) => item.permission === isLoggedIn
              ).map((item: any) => (
                <li key={item.id} className="border-b-2">
                  <Link
                    to={item.link}
                    className="inline-block py-1 px-3 font-regular text-white"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
