import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="max-h-screen py-16 flex flex-col items-center">
      <h1 className="text-3xl md:text-5xl font-bold">
        <span className="text-primary">404</span> Page Not Found
      </h1>
      <img src="/images/notFound.svg" alt="not-found" className="h-96" />
      <p className="text-xl mb-8 font-medium">
        Oops! Looks like you've taken a wrong turn..
      </p>
      <Button
        onClick={() => navigate(-1)}
        variant="primary"
        className="flex items-center gap-2"
      >
        <FaArrowLeftLong className="group-hover:-translate-x-1 smooth" />
        <span>Go Back</span>
      </Button>
    </div>
  );
}
