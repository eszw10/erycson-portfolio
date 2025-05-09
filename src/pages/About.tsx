import { FaCss3, FaHtml5, FaNodeJs, FaReact, FaSass } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import {
  RiNextjsLine,
  RiSupabaseLine,
  RiSvelteFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiReactquery,
  SiReactrouter,
  SiStyledcomponents,
  SiTypescript,
} from "react-icons/si";
import Profile from "../components/about/Profile";
import TechStack from "../components/ui/TechStack";

const stack = [
  {
    icon: <FaHtml5 size={50} color="#E34C26" />,
    label: "HTML",
  },
  {
    icon: <FaCss3 size={50} color="#2965F1" />,
    label: "CSS",
  },
  {
    icon: <IoLogoJavascript size={50} color="#F7DF1E" />,
    label: "JavaScript",
  },
  {
    icon: <FaReact size={50} color="#61DAFB" />,
    label: "React",
  },
  {
    icon: <RiTailwindCssFill size={50} color="#38BDF8" />,
    label: "Tailwind",
  },
  {
    icon: <SiReactrouter size={50} />,
    label: "react-router",
  },
  {
    icon: <FaSass size={50} color="#C69" />,
    label: "Sass",
  },

  {
    icon: <FaNodeJs size={50} color="#3C873A" />,
    label: "NodeJs",
  },
  {
    icon: <SiExpress size={50} />,
    label: "Express",
  },
  {
    icon: <SiMongodb size={50} color="#4DB33D" />,
    label: "MongoDB",
  },
  {
    icon: <RiSvelteFill size={50} color="#FF3E00" />,
    label: "Svelte",
  },
  {
    icon: <SiStyledcomponents size={50} color="#DB7093" />,
    label: "styled-comp.",
  },

  {
    icon: <RiSupabaseLine size={50} color="#3ECF8E" />,
    label: "Supabase",
  },
  {
    icon: <SiReactquery size={50} />,
    label: "react-query",
  },
  {
    icon: <RiNextjsLine size={50} color="#fffff" />,
    label: "Next JS",
  },
  {
    icon: <SiTypescript size={50} color="#3178C6" />,
    label: "TypeScript",
  },
];

export default function About() {
  return (
    <section className="p-5 pt-7 lg:pt-0 flex flex-col pb-16 gap-16">
      <Profile />
      <section className="flex flex-col gap-16">
        <p className="xl:mb-2 font-medium xl:text-5xl text-2xl  text-center underline underline-offset-8 decoration-primary">
          Tech Stack
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 items-center gap-y-10 gap-x-5 justify-between">
          {stack.map((item) => (
            <TechStack
              key={item.label}
              variant="default"
              icon={item.icon}
              label={item.label}
            />
          ))}
        </div>
      </section>
    </section>
  );
}
