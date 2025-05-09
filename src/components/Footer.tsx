import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { localizations } from "../localization/localizations";
import { Link } from "react-router-dom";
import FooterNavigation from "./navigation/FooterNavigation";
import { footerNavigations } from "../data/data";

const Footer = () => {
  const { nav, footer } = localizations;

  const socialMedias = {
    title: "Social Media",
    className: "gap-10",
    links: [
      {
        label: <FaGithub />,
        link: "https://github.com/erycszw10",
      },
      {
        label: <FaInstagram />,
        link: "https://www.instagram.com/erycszw10/",
      },
      {
        label: <FaLinkedin />,
        link: "https://www.linkedin.com/in/erycson-zulkarnain-wijaya-a01a75169/",
      },
    ],
  };

  const { title, links } = socialMedias;
  return (
    <footer
      id="contacts"
      className=" font-dm flex flex-col gap-16 pb-3 pt-16 border-t bordes-theme"
    >
      <div className="lg:ps-10 flex flex-col lg:flex-row gap-8 items-center text-center lg:text-start lg:items-start lg:gap-32 px-4 xl:px-[142px]">
        <p className="font-poppins font-semibold text-2xl">{nav.brand}</p>
        {footerNavigations.map((item) => (
          <FooterNavigation title={item.title} key={item.title}>
            {item.links.map((link) => (
              <Link className="smooth-hover" key={link.link} to={link.link}>
                {link.label}
              </Link>
            ))}
          </FooterNavigation>
        ))}
        <FooterNavigation title={title}>
          <div className="flex items-center gap-10">
            {links.map((link) => (
              <Link
                className="hover:text-primary hover:translate-y-1 smooth text-3xl"
                key={link.link}
                to={link.link}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </FooterNavigation>
      </div>
      <div className="py-5 border-t text-center bordes-theme px-4 ">
        <p className="text-sm">
          &#169; {new Date().getFullYear()} {footer.fullName}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
