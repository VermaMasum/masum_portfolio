import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "ReactJS",
      "Vue.js",
      "Next.js",
      "Three.js",
      "jQuery",
      "WordPress",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Flask",
      "REST APIs",
      "API Testing (Postman)",
    ],
  },
  {
    title: "Database",
    skills: ["MongoDB", "PostgreSQL", "SQL"],
  },
  {
    title: "Data & ML",
    skills: [
      "Python",
      "Machine Learning",
      "Apache Spark",
      "Hadoop",
      "MERN Stack",
    ],
  },
];

export default function Skills() {
  return (
    <section className="relative z-10 min-h-screen px-6 md:px-20 pt-24 pb-8">
      {/* HEADER */}
      <div className="relative z-20 max-w-3xl mb-24">
        <div className="absolute inset-0 -z-10 bg-black/30 blur-2xl rounded-full" />
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300 bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="text-lg md:text-xl text-purple-100 drop-shadow">
          Technologies and tools I work with across the stack.
        </p>
      </div>

      {/* SKILL GROUPS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="
  relative
  rounded-xl
  bg-slate-900/90
  backdrop-blur-xl
  border border-white/20
  shadow-[0_0_0_1px_rgba(255,255,255,0.6),0_0_14px_rgba(99,102,241,0.55),0_0_28px_rgba(236,72,153,0.35)]
"
          >
            {/* CARD CONTENT */}
            <div className="h-[180px] px-5 py-4 overflow-hidden">
              {/* TITLE */}
              <h3 className="text-lg font-semibold text-purple-300 mb-3">
                {group.title}
              </h3>

              {/* SKILLS */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 260 }}
                    className="
    px-2 py-1
    rounded-full
    text-[11px]
    text-purple-100
    bg-purple-500/15
    border border-purple-400/40
  "
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
