import { useSearchParams } from "react-router-dom";
import ProjectList from "../components/project/ProjectList";
import { projects as data } from "../data/data";
import { localizations } from "../localization/localizations";
import Pagination from "../components/ui/Pagination";
import { useWindowSize } from "../hooks";

export default function Projects() {
  const { projects } = localizations;
  const [searchParams] = useSearchParams();
  const windowSize = useWindowSize();
  const isMobile = windowSize.width < 768;
  const PAGE_SIZE = isMobile ? 3 : 6;
  const currentPage =
    !searchParams.get("page") ||
    Number(searchParams?.get("page")) > Math.ceil(data.length / PAGE_SIZE)
      ? 1
      : Number(searchParams.get("page"));
  const from = (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE;
  return (
    <div className="py-16 flex flex-col gap-16">
      <div className="flex flex-col gap-6 text-center items-center font-medium">
        <h2 className=" xl:text-5xl decoration-primary underline-offset-8 underline md:text-4xl text-3xl">
          {projects.title}
        </h2>
        <p className="text-blanco/60 md:max-w-2xl max-w-sm ">
          Journey through my projects to witness my process of transforming
          ideas into intuitive and engaging web applications that prioritize a
          seamless user experience.
        </p>
      </div>
      <ProjectList data={data.slice(from, to)} />
      <Pagination
        className="mx-auto"
        length={Math.ceil(data.length / PAGE_SIZE)}
        query="page"
      />
    </div>
  );
}
