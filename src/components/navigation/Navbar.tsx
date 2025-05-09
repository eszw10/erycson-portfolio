import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

import { useWindowSize } from "../../hooks";
import NavigationList from "./NavigationList";
import { useDarkMode } from "../../context/DarkModeContext";
import { LuSunMedium } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import Logo from "../ui/Logo";

export const Navbar = () => {
  const { width } = useWindowSize();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isClicked, setIsClicked] = useState(false);

  // Define breakpoints
  const isDesktop = width > 768;

  return (
    <section className="border-b bordes-theme fondo-theme top-0 sticky z-10">
      <nav className="max-w-7xl mx-auto py-4 flex items-center justify-between lg:px-4 2xl:px-0">
        <Logo />
        <div className="flex items-center gap-4 lg:gap-8">
          <NavigationList
            isDesktop={isDesktop}
            isClicked={isClicked}
            setIsClicked={setIsClicked}
          />
          <button
            onClick={toggleDarkMode}
            className="cursor-pointer hover:border-2 hover:border-blanco/90 w-9  dark:hover:bg-gray-300/20 rounded-full p-1 hover:delay-75"
          >
            {isDarkMode ? (
              <LuSunMedium size={25} />
            ) : (
              <IoMoonOutline size={25} />
            )}
          </button>
          {!isDesktop &&
            (isClicked ? (
              <RxCross2
                size={25}
                onClick={() => setIsClicked((value) => !value)}
                className="cursor-pointer me-4 xl:me-0"
              />
            ) : (
              <HiOutlineMenuAlt3
                size={25}
                onClick={() => setIsClicked((value) => !value)}
                className="cursor-pointer me-4 xl:me-0"
              />
            ))}
        </div>
      </nav>
    </section>
  );
};
