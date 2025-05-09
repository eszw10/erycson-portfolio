type TechStackProps = React.ComponentPropsWithoutRef<"div"> & {
  icon?: React.ReactNode;
  label: string;
  variant: "default" | "custom";
};

export default function TechStack({
  className,
  icon,
  label,
  variant = "default",
}: Readonly<TechStackProps>) {
  return (
    <div
      className={
        variant === "default"
          ? "rellenos-theme rounded-lg p-4 flex flex-col items-center gap-4 font-semibold tracking-widest"
          : className
      }
    >
      {icon}
      <p className="">{label}</p>
    </div>
  );
}
