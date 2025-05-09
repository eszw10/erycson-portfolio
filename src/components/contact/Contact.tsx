import React from "react";
import { Link } from "react-router-dom";

type ContactProps = {
  icon: React.ReactNode;
  title: string;
  label: string;
  link: string;
};

export default function Contact({
  title,
  icon,
  label,
  link,
}: Readonly<ContactProps>) {
  return (
    <div className="flex items-center gap-4">
      <div className="rellenos-theme p-2 rounded-full">{icon}</div>
      <div className="flex flex-col">
        <h4 className="text-xl">{title}</h4>
        <Link
          to={link}
          className="text-blanco/60 dark:text-blanco-dark/60 lg:max-w-2xl max-w-sm hover:text-primary-hover smooth"
        >
          {label}
        </Link>
      </div>
    </div>
  );
}
