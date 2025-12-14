import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../theme/useTheme";
import MagneticLink from "./MagneticLink";

export default function Navbar() {
  const theme = useTheme();
  const location = useLocation();
  const containerRef = useRef(null);
  const [indicatorStyle, setIndicatorStyle] = useState({
    left: 0,
    width: 0,
  });

  const links = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  // Move indicator on route change
  useEffect(() => {
    const activeLink = containerRef.current?.querySelector(
      `[data-path="${location.pathname}"]`
    );

    if (activeLink) {
      setIndicatorStyle({
        left: activeLink.offsetLeft,
        width: activeLink.offsetWidth,
      });
    }
  }, [location.pathname]);

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-30">
      <div
        ref={containerRef}
        className="
          relative
          flex gap-6 px-8 py-4
          rounded-full
          bg-black/50
          backdrop-blur-xl
          border border-white/10
          shadow-xl
        "
      >
        {/* SLIDING INDICATOR */}
        <span
          className="
            absolute bottom-2 h-[2px]
            transition-all duration-300 ease-out
          "
          style={{
            left: indicatorStyle.left,
            width: indicatorStyle.width,
            background: theme.primary,
            boxShadow: `0 0 10px ${theme.primary}`,
          }}
        />

        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            end
            data-path={link.path}
            className={({ isActive }) =>
              `
      relative z-10
      text-sm font-medium
      transition-colors duration-300
      ${isActive ? "text-white" : "text-gray-300 hover:text-white"}
      `
            }
            style={({ isActive }) => ({
              textShadow: isActive ? `0 0 12px ${theme.primary}` : "none",
            })}
          >
            <MagneticLink>{link.name}</MagneticLink>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
