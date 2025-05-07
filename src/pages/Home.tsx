import { FaArrowRightLong } from "react-icons/fa6";
import Button from "../components/ui/Button";
import Hero from "../components/Hero";
import Projects from "../components/project/ProjectList";
import { projects as data } from "../data/data";

function Home() {
  return (
    <div className="text-blanco relative">
      <Hero />
      <div className=" flex flex-col justify-center items-center gap-16 mb-16">
        <div className="font-medium self-center items-center text-center flex flex-col gap-6">
          <h2 className=" xl:text-5xl decoration-primary underline-offset-8 underline md:text-4xl text-3xl">
            Recent Projects
          </h2>
          <p className="text-blanco/60 md:max-w-2xl max-w-sm ">
            See my latest web app developments in action, demonstrating my
            ability to create interactive and user-focused solutions.
          </p>
        </div>
        <Projects data={data.slice(0, 3)} />
        <Button
          to="/projects"
          variant="primary"
          className="flex items-center gap-2 hover:scale-[110%] transition-transform duration-150 ease-in-out"
        >
          <span>View More Projects</span>
          <FaArrowRightLong className="group-hover:translate-x-1 transition duration-150 ease-in-out" />
        </Button>
      </div>
    </div>
  );
}

export default Home;
