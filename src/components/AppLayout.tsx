import { Outlet } from "react-router-dom";
import { Navbar } from "./navigation/Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function AppLayout() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = 400;
      if (window.scrollY >= scrollHeight) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className=" text-blanco relative">
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
      <Footer />
      <a
        href="#"
        className={`z-10 ${
          scrolled ? "fixed" : "hidden"
        } animate-bounce px-2 py-2 rounded-lg border border-bordes bg-rellenos bottom-10 right-10 hover:border-primary hover:border-2 smooth `}
      >
        <FaChevronUp className=" text-xl fa-solid fa-chevron-up" />
      </a>
    </section>
  );
}
