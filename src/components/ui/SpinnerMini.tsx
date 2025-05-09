import { BiLoaderAlt } from "react-icons/bi";

export default function SpinnerMini({
  color = "blanco-dark",
}: Readonly<{ color?: string }>) {
  return <BiLoaderAlt className={`animate-spin h-7 w-7 text-${color}`} />;
}
