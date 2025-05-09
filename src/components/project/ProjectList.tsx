import ProjectCard from "./ProjectCard";
import { ProjectsData } from "../../libs/types";

type ProjectsProps = {
  data: ProjectsData[];
};

const ProjectList = ({ data }: ProjectsProps) => {
  return (
    <div
      id="projects"
      className="font-dm px-4 md:px-10 grid md:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-16"
    >
      {data.map((item) => (
        <ProjectCard data={item} key={item.id} />
      ))}
    </div>
  );
};

export default ProjectList;
