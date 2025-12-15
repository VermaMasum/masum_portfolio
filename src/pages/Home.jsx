// import { useTheme } from "../theme/useTheme";
// import { useState } from "react";

// export default function Home() {
//   const theme = useTheme();
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div className="relative z-20 h-screen flex items-center justify-center">
//       {/* CENTER GLASS CARD */}
//       <div
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         className="
//           max-w-md
//           p-10
//           rounded-2xl
//           bg-black/60
//           backdrop-blur-xl
//           text-center
//           transition-all
//           duration-300
//         "
//         style={{
//           boxShadow: hovered
//             ? `0 0 60px ${theme.primary}55`
//             : `0 0 30px ${theme.primary}22`,
//           border: `1px solid ${
//             hovered ? theme.primary : "rgba(255,255,255,0.1)"
//           }`,
//         }}
//       >
//         <p className="text-gray-300 mb-3 tracking-wide">Hi, I am</p>

//         <h1
//           className="text-6xl font-bold leading-tight mb-4"
//           style={{
//             color: theme.primary,
//             textShadow: `0 0 20px ${theme.primary}55`,
//           }}
//         >
//           Masum <br /> Verma
//         </h1>

//         <p className="text-lg text-white mb-8">Full-Stack Developer | AI-ML</p>

//         {/* RESUME ACTIONS */}
//         <div className="flex gap-4 justify-center">
//           {/* VIEW RESUME */}
//           <a
//             href="/resume/Masum_Verma_Resume.pdf"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="
//               px-6 py-2
//               rounded-md
//               bg-white
//               text-black
//               font-medium
//               hover:scale-105
//               transition
//             "
//           >
//             👀 View Resume
//           </a>

//           {/* DOWNLOAD RESUME */}
//           <a
//             href="/resume/Masum_Verma_Resume.pdf"
//             download
//             className="
//               px-6 py-2
//               rounded-md
//               border border-white/40
//               text-white
//               hover:bg-white/10
//               transition
//             "
//           >
//             ⬇️ Download
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useTheme } from "../theme/useTheme";
import { useState, useEffect } from "react";

export default function Home() {
  const theme = useTheme();
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className="relative z-20 min-h-screen flex items-center justify-center px-4">
      {/* ================= MOBILE VERSION ================= */}
      {isMobile && (
        <div className="text-center w-full max-w-sm pt-24">
          <p className="text-gray-400 mb-2 tracking-wide">Hi, I am</p>

          <h1
            className="text-4xl font-bold mb-3"
            style={{ color: theme.primary }}
          >
            Masum Verma
          </h1>

          <p className="text-gray-300 mb-8">
            Full-Stack Developer | AI-ML Enthusiastic
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="/resume/Masum_Verma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                py-3 rounded-lg
                bg-white text-black font-medium
              "
            >
              👀 View Resume
            </a>

            <a
              href="/resume/Masum_Verma_Resume.pdf"
              download
              className="
                py-3 rounded-lg
                border border-white/40
                text-white
              "
            >
              ⬇️ Download Resume
            </a>
          </div>

          <p className="mt-6 text-xs text-gray-500">
            Best experienced on desktop 💻
          </p>
        </div>
      )}

      {/* ================= DESKTOP VERSION ================= */}
      {!isMobile && (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="
            max-w-md
            p-10
            rounded-2xl
            bg-black/60
            backdrop-blur-xl
            text-center
            transition-all
            duration-300
          "
          style={{
            boxShadow: hovered
              ? `0 0 60px ${theme.primary}55`
              : `0 0 30px ${theme.primary}22`,
            border: `1px solid ${
              hovered ? theme.primary : "rgba(255,255,255,0.1)"
            }`,
          }}
        >
          <p className="text-gray-300 mb-3 tracking-wide">Hi, I am</p>

          <h1
            className="text-6xl font-bold leading-tight mb-4"
            style={{
              color: theme.primary,
              textShadow: `0 0 20px ${theme.primary}55`,
            }}
          >
            Masum <br /> Verma
          </h1>

          <p className="text-lg text-white mb-8">
            Full-Stack Developer | AI-ML
          </p>

          {/* RESUME ACTIONS */}
          <div className="flex gap-4 justify-center">
            <a
              href="/resume/Masum_Verma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="
                px-6 py-2
                rounded-md
                bg-white
                text-black
                font-medium
                hover:scale-105
                transition
              "
            >
              👀 View Resume
            </a>

            <a
              href="/resume/Masum_Verma_Resume.pdf"
              download
              className="
                px-6 py-2
                rounded-md
                border border-white/40
                text-white
                hover:bg-white/10
                transition
              "
            >
              ⬇️ Download
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
