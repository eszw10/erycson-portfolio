import { localizations } from "../../localization/localizations";
import { FaAngleRight, FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { ProjectsData } from "../../libs/types";
import { Link } from "react-router-dom";
import Button from "../ui/Button";

type CardProps = {
  data: ProjectsData;
};

const ProjectCard = ({ data }: CardProps) => {
  const { card } = localizations;
  const description = `${data.desc.split(" ").slice(0, 20).join(" ")}...`;

  return (
    <div className="rellenos-theme bordes-theme h-[400px] border rounded-3xl flex flex-col px-2 pt-2 pb-4 gap-4  hover:shadow-emerge lg:hover:scale-105 cursor-pointer smooth">
      <img
        src={data.image}
        alt=""
        className="h-[80%] md:h-[60%] rounded-3xl object-cover "
      />
      <div className="px-4">
        <div className="font-poppins flex flex-col">
          <p className="font-semibold text-lg">{data.title}</p>
          <p className="text-sm mb-4">{description}</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-4 items-center text-sm">
              {data.codeShown && (
                <Link
                  to={data.gitLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2 items-center hover:text-primary smooth group"
                >
                  <FaGithub className="group-hover:scale-[110%] " />
                  <p>{card.code}</p>
                </Link>
              )}
              {data.demoShown && (
                <Link
                  to={data.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-2 items-center hover:text-primary smooth group"
                >
                  <FaArrowUpRightFromSquare className="group-hover:scale-[110%] " />
                  <p>{card.demo}</p>
                </Link>
              )}
            </div>
            <Button
              to={`/projects/${data.id}`}
              variant="secondary"
              className="flex items-center gap-1 px-3 py-2 bg-neutral-700/20 hover:text-blanco-dark hover:bg-primary/90 rounded-4xl border-[1px] bordes-theme text-sm shadow-2xl"
            >
              <span>Details</span>
              <FaAngleRight className="smooth group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
