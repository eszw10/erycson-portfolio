import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../components/ui/Button";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const { error } = useRouteError() as { error: { message: string } | null };
  console.log("error", error);
  return (
    <div className="text-blanco h-screen py-16 flex flex-col items-center justify-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-10">
        <span className="text-primary">Well,</span> This is Unexpected...
      </h1>
      <img src="/images/errorImage.svg" alt="not-found" className="h-96" />
      <p className="text-xl mb-8 font-medium">
        <span className="text-primary">Error: </span>
        {error?.message ?? "Something went wrong!"}
      </p>
      <Button to="/" variant="primary" className="flex items-center gap-2">
        <FaArrowLeftLong className="group-hover:-translate-x-1 smooth" />
        <span>Go Back</span>
      </Button>
    </div>
  );
}
