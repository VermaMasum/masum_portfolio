import { motion } from "framer-motion";

const certifications = [
  {
    title: "IBM Developers Skill Network",
    skills: ["SQL", "Databases"],
  },
  {
    title: "Google Cloud Ready",
    skills: ["Google Cloud Platform"],
  },
  {
    title: "Deloitte Data Analytics Job Simulation",
    skills: ["Tableau", "Data Analytics"],
  },
  {
    title: "Python Course for Beginners",
    skills: ["Python"],
  },
  {
    title: "Application of Machine Learning and Deep Learning",
    skills: ["Machine Learning", "Deep Learning"],
  },
  {
    title: "Generative AI fundamentals",
    skills: ["AI"],
  },
];

export default function Certifications() {
  return (
    <section className="relative z-10 min-h-screen px-6 md:px-20 pt-24 pb-16">
      {/* HEADER */}
      <div className="relative max-w-3xl mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold mb-3 text-purple-300 ">
          Certifications
        </h2>
        {/* <p className="text-lg text-purple-100">
          Professional learning milestones and certifications.
        </p> */}
      </div>

      {/* TERMINAL CONTAINER */}
      <div
        className="
        max-w-4xl mx-auto
        bg-black/80
        backdrop-blur-xl
        rounded-xl
        border border-purple-400/30
        shadow-[0_0_40px_rgba(0,0,0,0.9)]
        overflow-hidden
      "
      >
        {/* TERMINAL HEADER */}
        <div className="flex items-center gap-2 px-4 py-3 bg-slate-900 border-b border-white/10">
          <span className="w-3 h-3 rounded-full bg-red-500" />
          <span className="w-3 h-3 rounded-full bg-yellow-400" />
          <span className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-sm text-gray-400 font-mono">
            certifications.log
          </span>
        </div>

        {/* TERMINAL BODY */}
        <div className="p-6 font-mono text-sm space-y-6 text-gray-200">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <span className="text-green-400">$</span>{" "}
              <span className="text-purple-300">completed</span>{" "}
              <span className="text-white">{cert.title}</span>
              <div className="ml-6 mt-2 flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="
                      text-xs
                      text-purple-200
                      border border-purple-400/40
                      px-2 py-0.5
                      rounded
                    "
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
