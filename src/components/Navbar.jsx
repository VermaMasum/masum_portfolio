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

  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Experience", path: "/experience" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Education", path: "/education" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  /* SLIDING INDICATOR – DESKTOP ONLY */
  useEffect(() => {
    if (window.innerWidth < 768) return;

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
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <nav className="hidden md:block fixed top-6 left-1/2 -translate-x-1/2 z-30">
        <div
          ref={containerRef}
          className="
            relative flex gap-6 px-8 py-4
            rounded-full
            bg-black/50
            backdrop-blur-xl
            border border-white/10
            shadow-xl
          "
        >
          {/* SLIDING INDICATOR */}
          <span
            className="absolute bottom-2 h-[2px] transition-all duration-300 ease-out"
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
                `relative z-10 text-sm font-medium transition-colors
                ${isActive ? "text-white" : "text-gray-300 hover:text-white"}`
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

      {/* ================= MOBILE NAVBAR ================= */}
      <nav className="md:hidden fixed top-0 left-0 w-full z-40 bg-black/60 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between px-6 h-[72px]">
          <span className="text-white font-semibold">Masum</span>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-white text-2xl"
          >
            ☰
          </button>
        </div>

        {mobileOpen && (
          <div className="px-6 pb-6 bg-black/80">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `py-2 border-b border-white/10
                    ${isActive ? "text-white" : "text-gray-300"}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
