import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import Contact from "./Contact";
import { localizations } from "../../localization/localizations";

const contacts = [
  {
    title: "Email",
    label: "erycszw10@gmail.com",
    icon: <MdEmail size={24} />,
    link: "mailto:erycszw10@gmail.com",
  },
  {
    title: "Whatsapp",
    label: "+6289603776545",
    icon: <FaWhatsapp size={24} />,
    link: "https://wa.me/6289603776545",
  },
  {
    title: "Linkedin",
    label: "linkedin.com/in/erycson-zulkarnain-wijaya",
    icon: <FaLinkedin size={24} />,
    link: "https://www.linkedin.com/in/erycson-zulkarnain-wijaya/",
  },
  {
    title: "Github",
    label: "github.com/eszw10",
    icon: <FaGithub size={24} />,
    link: "https://github.com/eszw10",
  },
];

export default function ContactInfo() {
  const { title, subtitle } = localizations.contact.info;
  return (
    <div className="lg:flex-1/2">
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-blanco/60 dark:text-blanco-dark/60 lg:max-w-2xl max-w-sm mb-10">
        {subtitle}
      </p>
      <div className="flex flex-col gap-4">
        {contacts.map((contact) => (
          <Contact
            key={contact.title}
            title={contact.title}
            label={contact.label}
            icon={contact.icon}
            link={contact.link}
          />
        ))}
      </div>
    </div>
  );
}
