export default function FooterNavigation({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <div className="flex flex-col gap-5 xl:gap-6">
      <p className="dark:text-accent text-blanco font-semibold text-lg">
        {title}
      </p>
      {children}
    </div>
  );
}
