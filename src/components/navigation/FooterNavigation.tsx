export default function FooterNavigation({
  children,
  title,
}: Readonly<{
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <div className="flex flex-col gap-5 xl:gap-6">
      <p className="text-accent font-medium">{title}</p>
      {children}
    </div>
  );
}
