import { motion } from "framer-motion";

const cardVariant = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

export default function Experience() {
  return (
    <section className="relative z-10 min-h-screen px-6 md:px-24 pt-32 pb-32">
      {/* TITLE */}
      {/* TITLE + SCROLL HINT */}
      {/* EXPERIENCE INTRO BANNER */}
      <div className="relative max-w-5xl mx-auto mb-32">
        {/* GLOW LAYER */}
        <div
          className="
      absolute inset-0
      rounded-[32px]
      bg-gradient-to-r
      from-purple-500/20
      via-pink-400/20
      to-purple-500/20
      blur-2xl
      opacity-80
    "
        />

        {/* GLASS PANEL */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="
      relative
      rounded-[32px]
      bg-black/50
      backdrop-blur-xl
      border border-white/10
      px-10 py-16
      text-center
    "
        >
          {/* TITLE */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="
        text-5xl md:text-6xl
        font-bold
        bg-gradient-to-r
        from-purple-300
        via-pink-300
        to-purple-300
        bg-clip-text
        text-transparent
      "
          >
            Experience
          </motion.h2>

          {/* SUBTITLE */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-gray-200 max-w-xl mx-auto"
          >
            A snapshot of my professional journey and the problems I’ve solved
          </motion.p>

          {/* SCROLL INDICATOR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10 flex flex-col items-center text-purple-300"
          >
            <span className="text-xs tracking-[0.3em] uppercase mb-2">
              Scroll
            </span>

            {/* FLOWING LINE */}
            <div className="relative h-10 w-[2px] overflow-hidden rounded-full bg-purple-300/30">
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-purple-400"
                animate={{ y: ["-100%", "100%"] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* EXPERIENCE CARDS */}
      <div className="max-w-4xl mx-auto space-y-24">
        {/* CARD 1 */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
            bg-black/60
            backdrop-blur-xl
            p-10
            rounded-2xl
            border border-white/10
          "
        >
          <h3 className="text-xl font-semibold text-white">
            Full Stack Developer — Mobilions Labs Pvt Ltd
          </h3>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Worked on MERN-based applications, REST APIs, frontend–backend
            integration, and scalable production systems.
          </p>
        </motion.div>

        {/* CARD 2 */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
            bg-black/60
            backdrop-blur-xl
            p-10
            rounded-2xl
            border border-white/10
          "
        >
          <h3 className="text-xl font-semibold text-white">
            Software Engineer Intern — Vistanova Infotech
          </h3>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Built an interactive 3D home catalog using Three.js and Blender with
            real-time visualization and smooth user interaction.
          </p>
        </motion.div>

        {/* CARD 3 */}
        <motion.div
          variants={cardVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="
            bg-black/60
            backdrop-blur-xl
            p-10
            rounded-2xl
            border border-white/10
          "
        >
          <h3 className="text-xl font-semibold text-white">
            Web Developer Intern — QuantixTech Solutions Pvt Ltd
          </h3>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Designed and developed responsive websites using WordPress, HTML,
            CSS, and JavaScript for real-world clients.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { useTheme } from "../theme/useTheme";

// export default function Experience() {
//   const containerRef = useRef(null);
//   const theme = useTheme();

//   // Track scroll progress inside this section
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Card animations (scroll-controlled)
//   const y1 = useTransform(scrollYProgress, [0, 0.33], [120, 0]);
//   const y2 = useTransform(scrollYProgress, [0.33, 0.66], [120, 0]);
//   const y3 = useTransform(scrollYProgress, [0.66, 1], [120, 0]);

//   const o1 = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
//   const o2 = useTransform(scrollYProgress, [0.33, 0.66], [0, 1]);
//   const o3 = useTransform(scrollYProgress, [0.66, 1], [0, 1]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative z-10 min-h-[300vh] px-6 md:px-24"
//     >
//       {/* SCROLL PROGRESS INDICATOR */}
//       <div className="fixed right-8 top-1/2 -translate-y-1/2 z-20 hidden md:block">
//         <div className="relative h-48 w-[2px] bg-white/20 rounded-full">
//           {/* PROGRESS LINE */}
//           <motion.div
//             className="absolute top-0 left-0 w-full rounded-full"
//             style={{
//               height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
//               background: theme.primary,
//             }}
//           />

//           {/* MOVING DOT */}
//           <motion.div
//             className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
//             style={{
//               top: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
//               background: theme.primary,
//               boxShadow: `0 0 10px ${theme.primary}`,
//             }}
//           />
//         </div>
//       </div>

//       {/* STICKY CONTENT */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-20 sticky top-32 h-screen">
//         {/* LEFT — STICKY TEXT */}
//         <div className="flex flex-col justify-center">
//           <h2 className="text-5xl font-bold text-white mb-6">Experience</h2>
//           <p className="text-gray-300 max-w-md leading-relaxed">
//             A journey through my professional growth, the technologies I worked
//             with, and the real-world problems I solved.
//           </p>
//         </div>

//         {/* RIGHT — SCROLL CONTROLLED CARDS */}
//         <div className="relative h-full flex items-center">
//           {/* SECTION INDEX */}

//           {/* CARD 1 */}
//           <motion.div
//             style={{ y: y1, opacity: o1 }}
//             className="
//               absolute
//               bg-black/60
//               backdrop-blur-xl
//               p-8
//               rounded-2xl
//               border border-white/10
//             "
//           >
//             <h3 className="text-xl font-semibold text-white">
//               Full Stack Developer — Mobilions Labs Pvt Ltd
//             </h3>
//             <p className="text-gray-300 mt-3 leading-relaxed">
//               Working on MERN-based systems, REST APIs, frontend–backend
//               integration, and scalable application development.
//             </p>
//           </motion.div>

//           {/* CARD 2 */}
//           <motion.div
//             style={{ y: y2, opacity: o2 }}
//             className="
//               absolute
//               bg-black/60
//               backdrop-blur-xl
//               p-8
//               rounded-2xl
//               border border-white/10
//             "
//           >
//             <h3 className="text-xl font-semibold text-white">
//               Software Engineer Intern — Vistanova Infotech
//             </h3>
//             <p className="text-gray-300 mt-3 leading-relaxed">
//               Built an interactive 3D home catalog using Three.js and Blender
//               with real-time visualization.
//             </p>
//           </motion.div>

//           {/* CARD 3 */}
//           <motion.div
//             style={{ y: y3, opacity: o3 }}
//             className="
//               absolute
//               bg-black/60
//               backdrop-blur-xl
//               p-8
//               rounded-2xl
//               border border-white/10
//             "
//           >
//             <h3 className="text-xl font-semibold text-white">
//               Web Developer Intern — QuantixTech Solutions Pvt Ltd
//             </h3>
//             <p className="text-gray-300 mt-3 leading-relaxed">
//               Designed and developed responsive websites using WordPress, HTML,
//               CSS, and JavaScript.
//             </p>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }
