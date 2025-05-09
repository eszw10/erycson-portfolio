import { Link, useParams } from "react-router-dom";
import { projects } from "../data/data";
import { FaAngleLeft, FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { localizations } from "../localization/localizations";
import Button from "../components/ui/Button";
import TechStack from "../components/ui/TechStack";

export default function Project() {
  const { projectId } = useParams();
  const { card } = localizations;

  const {
    title,
    image,
    desc,
    info,
    gitLink,
    demo,
    codeShown,
    demoShown,
    techStacks,
  } = projects.find((project) => project.id === projectId)!;
  return (
    <section className="py-16 flex flex-col lg:flex-row  gap-16 p-5 relative">
      <div className="my-auto ">
        <img
          src={image}
          alt="project-image"
          className=" w-full rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-8 lg:max-w-1/2 text-justify">
        <h1 className="text-4xl font-semibold underline underline-offset-8 decoration-primary">
          {title}
        </h1>
        <p>{desc}</p>
        {info && <p>{info}</p>}
        <div className="flex items-center gap-4 flex-wrap">
          <p className="font-semibold">Tech Stack :</p>
          {techStacks.map((stack) => (
            <TechStack
              key={stack}
              label={stack}
              variant="custom"
              className="rellenos-theme px-3 p-2 rounded-4xl tracking-normal"
            />
          ))}
        </div>
        <div className="flex items-center justify-between text-sm mt-auto">
          <Button
            to="/projects"
            variant="secondary"
            className="flex items-center gap-1 px-3 py-2 bg-neutral-700/20 hover:text-blanco-dark hover:bg-primary/90 rounded-4xl border-[1px] bordes-theme text-sm shadow-2xl"
          >
            <FaAngleLeft className="smooth group-hover:-translate-x-1" />
            <span>Back</span>
          </Button>
          <div className="flex items-center gap-4">
            {codeShown && (
              <Link
                to={gitLink}
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 items-center hover:text-primary smooth group text-base"
              >
                <FaGithub className="group-hover:scale-[110%] " />
                <p>{card.code}</p>
              </Link>
            )}
            {demoShown && (
              <Link
                to={demo}
                target="_blank"
                rel="noreferrer"
                className="flex gap-2 items-center hover:text-primary smooth group text-base"
              >
                <FaArrowUpRightFromSquare className="group-hover:scale-[110%] " />
                <p>{card.demo}</p>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
