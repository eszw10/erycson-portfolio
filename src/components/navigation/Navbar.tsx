import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";

import { useWindowSize } from "../../hooks";
import { localizations } from "../../localization/localizations";
import NavigationList from "./NavigationList";

export const Navbar = () => {
  const { nav } = localizations;
  const { width } = useWindowSize();
  const [isClicked, setIsClicked] = useState(false);
  // Define breakpoints
  const isDesktop = width > 768;

  return (
    <section className="border-b border-b-bordes bg-fondo top-0 sticky z-10">
      <nav className="max-w-7xl mx-auto py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center ms-4 xl:ms-0">
          <img src="/icons/logo.png" className="h-8" alt="Logo" />
          <p className="font-semibold text-2xl leading-8 ">{nav.brand}</p>
        </Link>
        <NavigationList
          isDesktop={isDesktop}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
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
      </nav>
    </section>
  );
};
