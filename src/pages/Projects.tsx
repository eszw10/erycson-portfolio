import { useSearchParams } from "react-router-dom";

import ProjectList from "../components/project/ProjectList";
import Pagination from "../components/ui/Pagination";

import { projects as data } from "../data/data";
import { useWindowSize } from "../hooks";
import { localizations } from "../localization/localizations";

export default function Projects() {
  const { projects } = localizations;
  const [searchParams] = useSearchParams();

  // window size
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;
  //pagination
  function getProjects() {
    if (isMobile) {
      return 3;
    } else if (windowSize.width >= 768 && windowSize.width <= 1024) {
      return 4;
    } else {
      return 6;
    }
  }
  const PAGE_SIZE = getProjects();
  const paginationSize = Math.ceil(data.length / PAGE_SIZE);
  const currentPage =
    !searchParams.get("page") ||
    Number(searchParams?.get("page")) > paginationSize
      ? 1
      : Number(searchParams.get("page"));
  const from = (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE;
  return (
    <div className="py-16 flex flex-col gap-16">
      <div className="flex flex-col gap-6 text-center items-center font-medium">
        <h2 className=" xl:text-5xl decoration-primary underline-offset-8 underline lg:text-4xl text-3xl">
          {projects.title}
        </h2>
        <p className="text-blanco/60 dark:text-blanco-dark/60 lg:max-w-2xl max-w-sm ">
          Journey through my projects to witness my process of transforming
          ideas into intuitive and engaging web applications that prioritize a
          seamless user experience.
        </p>
      </div>
      <ProjectList data={data.slice(from, to)} />
      <Pagination className="mx-auto" length={paginationSize} query="page" />
    </div>
  );
}
