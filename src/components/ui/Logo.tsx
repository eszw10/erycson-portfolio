import { Link } from "react-router-dom";
import { useDarkMode } from "../../context/DarkModeContext";
import { localizations } from "../../localization/localizations";

export default function Logo() {
  const { isDarkMode } = useDarkMode();
  const { nav } = localizations;
  const logoSrc = isDarkMode ? "/icons/logo-dark.png" : "/icons/logo-light.png";

  return (
    <Link to="/" className="flex items-center ms-4 xl:ms-0 max-h-9">
      <img src={logoSrc} className="h-16 " alt="Logo" />
      <p className="font-semibold text-2xl leading-8 ">{nav.brand}</p>
    </Link>
  );
}
