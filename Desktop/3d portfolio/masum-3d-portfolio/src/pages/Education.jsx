// import { motion } from "framer-motion";

// const educationData = [
//   {
//     degree: "M.Tech – Computer Science & Engineering",
//     institute: "Nirma University",
//     year: "2024 – 2026",
//     score: "CGPA: 8.6",
//     active: true,
//   },
//   {
//     degree: "B.E – Computer Engineering",
//     institute: "SVIT Vasad",
//     year: "2020 – 2024",
//     score: "CGPA: 9.21",
//   },
//   {
//     degree: "HSC – PCM",
//     institute: "Krishna Science School",
//     year: "2020",
//     score: "Percentile: 90.36",
//   },
//   {
//     degree: "SSC",
//     institute: "Shree Gujarat Vidyut Board Vidyalaya",
//     year: "2018",
//     score: "Percentile: 99.33",
//   },
// ];

// export default function Education() {
//   return (
//     <section className="relative z-10 min-h-screen px-6 md:px-20 pt-24 pb-16">
//       {/* HEADER */}
//       <div className="relative max-w-3xl mb-24">
//         <div className="absolute inset-0 -z-10 bg-purple-500/20 blur-3xl rounded-full" />
//         <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
//           Education
//         </h2>
//         <p className="text-lg md:text-xl text-purple-100">
//           A timeline of my academic growth and learning journey.
//         </p>
//       </div>

//       {/* TIMELINE */}
//       <div className="relative max-w-4xl mx-auto">
//         {/* LINE */}
//         <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-purple-400 via-pink-400 to-indigo-400 opacity-70" />

//         <div className="space-y-16">
//           {educationData.map((edu, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, x: 60 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               className="relative flex gap-8"
//             >
//               {/* TIMELINE DOT */}
//               <motion.div
//                 animate={{
//                   boxShadow: edu.active
//                     ? "0 0 24px rgba(168,85,247,0.9)"
//                     : "0 0 10px rgba(168,85,247,0.5)",
//                 }}
//                 className={`
//                   relative z-10 mt-2 w-4 h-4 rounded-full
//                   ${edu.active ? "bg-purple-400" : "bg-purple-300"}
//                 `}
//               />

//               {/* CARD */}
//               <motion.div
//                 whileHover={{
//                   y: -6,
//                   boxShadow: edu.active
//                     ? "0 0 40px rgba(168,85,247,0.6)"
//                     : "0 0 22px rgba(168,85,247,0.4)",
//                 }}
//                 transition={{ type: "spring", stiffness: 200 }}
//                 className={`
//                   relative flex-1 overflow-hidden
//                   rounded-xl px-6 py-5
//                   bg-slate-900/90 backdrop-blur-xl
//                   border border-white/20
//                 `}
//               >
//                 {/* GRADIENT SWEEP */}
//                 <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-[pulse_6s_infinite]" />

//                 {/* YEAR BADGE */}
//                 <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200">
//                   {edu.year}
//                 </div>

//                 <h3 className="text-xl font-semibold text-purple-300 mb-1">
//                   {edu.degree}
//                 </h3>

//                 <p className="text-gray-300">{edu.institute}</p>

//                 <p className="mt-3 text-sm text-purple-200">{edu.score}</p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "M.Tech – Computer Science & Engineering",
    institute: "Nirma University",
    year: "2024 – 2026",
    score: "CGPA: 8.6",
    active: true,
  },
  {
    degree: "B.E – Computer Engineering",
    institute: "SVIT Vasad",
    year: "2020 – 2024",
    score: "CGPA: 9.21",
  },
  {
    degree: "HSC – PCM",
    institute: "Krishna Science School",
    year: "2020",
    score: "Percentile: 90.36",
  },
  {
    degree: "SSC",
    institute: "Shree Gujarat Vidyut Board Vidyalaya",
    year: "2018",
    score: "Percentile: 99.33",
  },
];

export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="relative z-10 min-h-screen px-6 md:px-20 pt-24 pb-16"
    >
      {/* HEADER */}
      <div className="relative max-w-3xl mb-24">
        <div className="absolute inset-0 -z-10 bg-purple-500/20 blur-3xl rounded-full" />

        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
          Education
        </h2>

        <p className="text-lg md:text-xl text-purple-100">
          A timeline of my academic growth and learning journey.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-purple-400 via-pink-400 to-indigo-400 opacity-70" />

        <div className="space-y-16">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="relative flex gap-8"
            >
              {/* TIMELINE DOT */}
              <motion.div
                animate={{
                  boxShadow: edu.active
                    ? "0 0 26px rgba(168,85,247,0.95)"
                    : "0 0 12px rgba(168,85,247,0.6)",
                }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`mt-2 w-4 h-4 rounded-full ${
                  edu.active ? "bg-purple-400" : "bg-purple-300"
                }`}
              />

              {/* CARD */}
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: edu.active
                    ? "0 0 42px rgba(168,85,247,0.6)"
                    : "0 0 24px rgba(168,85,247,0.4)",
                }}
                transition={{ type: "spring", stiffness: 180 }}
                className="
                  relative flex-1 overflow-hidden
                  rounded-xl px-6 py-5
                  bg-slate-900/90 backdrop-blur-xl
                  border border-white/20
                "
              >
                {/* Glow Sweep */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent animate-[pulse_6s_infinite]" />

                {/* YEAR BADGE */}
                <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/40 text-purple-200">
                  {edu.year}
                </div>

                <h3 className="text-xl font-semibold text-purple-300 mb-1">
                  {edu.degree}
                </h3>

                <p className="text-gray-300">{edu.institute}</p>

                <p className="mt-3 text-sm text-purple-200">{edu.score}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
