import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import Menu from "./Menu";

const Navbar = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        // ถ้าเลื่อนลง -> ซ่อน Navbar
        setIsVisible(false);
      } else {
        // ถ้าเลื่อนขึ้น -> แสดง Navbar
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  return (
    <section
      className={` fixed top-0 w-full z-9999 items-center  md:flex-row gap-2 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
      }`}
      style={{
        backgroundColor: lastScrollY > 50 ? "rgba(0, 0, 0, 1)" : "transparent",
      }}
    >
      <div className="flex justify-between py-4 maincontainer">
        <Logo />
        <Menu />
      </div>
    </section>
  );
};

export default Navbar;
