import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { useSearchParams } from "react-router-dom";

type PaginationProps = React.ComponentPropsWithoutRef<"div"> & {
  length: number;
  query: string;
};

export default function Pagination({
  length,
  className,
  query,
}: Readonly<PaginationProps>) {
  const [searchParams, setSearchParams] = useSearchParams();
  const params =
    !searchParams.get(query) || Number(searchParams?.get(query)) > length
      ? 1
      : Number(searchParams.get(query));

  function prev() {
    if (params === 1) return;
    setSearchParams({ [query]: (params - 1).toString() });
  }

  function next() {
    if (params === length) return;
    setSearchParams({ [query]: (params + 1).toString() });
  }

  return (
    <div className={className + " flex items-center gap-4"}>
      <button
        className="p-1 rounded bg-rellenos hover:bg-primary cursor-pointer disabled:bg-bordes disabled:opacity-30"
        onClick={prev}
        disabled={params === 1}
      >
        <FaAngleLeft size={22} onClick={prev} />
      </button>
      <div className="flex items-center gap-2 bg-prima">
        {Array.from({ length }).map((_, i) => (
          <button
            onClick={() => setSearchParams({ [query]: (i + 1).toString() })}
            key={i + 1}
            value={i + 1}
            disabled={i + 1 === params}
            className={`w-7 h-7 rounded cursor-pointer bg-rellenos disabled:bg-primary `}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <button
        className="p-1 rounded bg-rellenos hover:bg-primary cursor-pointer disabled:bg-bordes disabled:opacity-30"
        onClick={next}
        disabled={params === length}
      >
        <FaAngleRight size={22} className="disabled:text-rellenos:" />
      </button>
    </div>
  );
}
