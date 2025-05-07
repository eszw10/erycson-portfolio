import { Link } from "react-router-dom";

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  to?: string;
  target?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  className,
  variant = "primary",
  to,
  target,
  disabled,
  onClick,
}: Readonly<ButtonProps>) {
  const variants = {
    primary: "btn-primary",
    secondary: "btn-line",
  };
  if (to)
    return (
      <Link
        to={to}
        onClick={onClick}
        target={target}
        className={
          variants[variant] + " font-semibold group cursor-pointer " + className
        }
      >
        {children}
      </Link>
    );
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={
        variants[variant] + " font-semibold group cursor-pointer " + className
      }
    >
      {children}
    </button>
  );
}
