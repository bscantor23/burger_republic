import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MenuMock } from "../mockData/menu-mock";

interface ResponsiveMenuProps {
  open: boolean;
}

const ResponsiveMenu: React.FC<ResponsiveMenuProps> = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-semibold uppercase text-normal py-10 m-6 rounded-3xl">
            <ul className="flex flex-col justify-center items-center gap-10">
              {MenuMock.map((item: any) => (
                <li key={item.id} className="border-b-2">
                  <a
                    href={item.link}
                    className="inline-block py-1 px-3 hover:text-primary font-regular text-normal"
                  >
                    {item.name}
                  </a>
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
