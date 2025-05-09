import { localizations } from "../localization/localizations";
import { LuDownload } from "react-icons/lu";
import Button from "./ui/Button";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const { hero } = localizations;

  return (
    <div className="h-screen text-center flex flex-col justify-center items-center font-dm gap-4 xl:gap-8">
      <p className="xl:text-6xl text-4xl font-bold">
        {hero.intro} <span className="text-primary">{hero.name}</span>
      </p>
      <TypeAnimation
        sequence={[
          hero.role,
          3000,
          hero.role2,
          2500,
          hero.role3,
          2500,
          hero.role4,
          2500,
        ]}
        className="xl:text-6xl text-4xl font-bold"
        repeat={Infinity}
      />
      <p className="sm:text-xl text-lg">{hero.message}</p>
      <div className="flex xl:flex-row flex-col xl:items-center gap-4 xl:gap-6">
        <Button variant="primary" className="flex items-center gap-2 group">
          <Link to="/projects">{hero.cta.viewProjects}</Link>
          <FaArrowRightLong className="group-hover:translate-x-1 transition duration-150 ease-in-out" />
        </Button>
        <Button variant="secondary">
          <a
            href="/resume.pdf"
            download="resume.pdf"
            target="_self"
            className="flex gap-2 items-center cursor-pointer group"
          >
            <LuDownload className=" group-hover:translate-y-1 transition duration-150 ease-in-out" />
            <p>{hero.cta.downloadCV}</p>
          </a>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
