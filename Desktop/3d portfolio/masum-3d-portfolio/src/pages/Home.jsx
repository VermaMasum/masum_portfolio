// // import { useTheme } from "../theme/useTheme";

// // export default function Home() {
// //   const theme = useTheme();

// //   return (
// //     <div className="relative z-20 h-screen flex items-center justify-center">
// //       {/* TEXT PANEL */}
// //       <div
// //         className="
// //           max-w-xl
// //           p-10
// //           rounded-2xl
// //           backdrop-blur-md
// //           bg-gradient-to-r
// //           from-black/60
// //           to-black/20
// //         "
// //       >
// //         <p className="text-gray-300 mb-2 tracking-wide">Hi, I am</p>

// //         <h1
// //           className="text-6xl font-bold leading-tight"
// //           style={{ color: theme.primary }}
// //         >
// //           Masum <br /> Verma
// //         </h1>

// //         <p className="mt-4 text-lg text-gray-200">
// //           Full-Stack Developer | AI-ML
// //         </p>

// //         <div className="flex gap-4 mt-6">
// //           <a
// //             href="/resume.pdf"
// //             className="
// //               px-6 py-2
// //               rounded-md
// //               bg-white
// //               text-black
// //               font-medium
// //               hover:scale-105
// //               transition
// //             "
// //           >
// //             Resume
// //           </a>

// //           <a
// //             href="https://github.com/VermaMasum"
// //             className="
// //               px-6 py-2
// //               rounded-md
// //               border border-white/30
// //               text-white
// //               hover:bg-white/10
// //               transition
// //             "
// //           >
// //             GitHub
// //           </a>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
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

//         <p className="text-lg text-white mb-6">Full-Stack Developer | AI-ML</p>

//         <div className="flex gap-4 justify-center">
//           <a
//             href="/resume.pdf"
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
//             Resume
//           </a>

//           <a
//             href="https://github.com/VermaMasum"
//             target="_blank"
//             rel="noreferrer"
//             className="
//               px-6 py-2
//               rounded-md
//               border border-white/40
//               text-white
//               hover:bg-white/10
//               transition
//             "
//           >
//             GitHub
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useTheme } from "../theme/useTheme";
import { useState } from "react";

export default function Home() {
  const theme = useTheme();
  const [hovered, setHovered] = useState(false);

  return (
    <div className="relative z-20 h-screen flex items-center justify-center">
      {/* CENTER GLASS CARD */}
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

        <p className="text-lg text-white mb-8">Full-Stack Developer | AI-ML</p>

        {/* RESUME ACTIONS */}
        <div className="flex gap-4 justify-center">
          {/* VIEW RESUME */}
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

          {/* DOWNLOAD RESUME */}
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
    </div>
  );
}
