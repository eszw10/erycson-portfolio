import { FaClipboardList, FaHome, FaInfoCircle } from "react-icons/fa";
import { localizations } from "../../localization/localizations";
import { MdEmail } from "react-icons/md";
import { NavLink } from "react-router-dom";

type NavigationListProps = Readonly<{
  isDesktop: boolean;
  isClicked: boolean;
  setIsClicked: React.Dispatch<React.SetStateAction<boolean>>;
}>;

export default function NavigationList({
  isDesktop,
  isClicked,
  setIsClicked,
}: NavigationListProps) {
  const { nav } = localizations;

  const navigations = [
    {
      name: nav.home,
      link: "/",
      icon: <FaHome />,
    },
    {
      name: nav.about,
      link: "/about",
      icon: <FaInfoCircle />,
    },
    {
      name: nav.projects,
      link: "/projects",
      icon: <FaClipboardList />,
    },
    {
      name: nav.contacts,
      link: "/contacts",
      icon: <MdEmail />,
    },
  ];

  return (
    <>
      {!isDesktop && !isClicked ? null : (
        <ul
          className={`${
            isDesktop ? "nav-desktop" : "nav-mobile"
          } flex font-semibold`}
        >
          {navigations.map((item) => (
            <li key={item.name} className={`cursor-pointer `}>
              <NavLink
                to={item.link}
                onClick={() => !isDesktop && setIsClicked(false)}
                className={`${({ isActive }: { isActive: boolean }) =>
                  isActive
                    ? "active"
                    : "nav-hover "} flex items-center gap-2 md:block p-2 md:px-0
                  `}
              >
                {!isDesktop && item.icon}
                <span>{item.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
