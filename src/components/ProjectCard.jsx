import { motion } from "framer-motion";

export default function ProjectCard({ title, desc, tech, index }) {
  return (
    <div
      className="
        min-w-[420px]
        max-w-[420px]
        bg-slate-900/70
        backdrop-blur-xl
        rounded-2xl
        p-8
        border border-white/10
        shadow-2xl
      "
    >
      <span className="text-sm text-purple-400">0{index + 1}</span>

      <h3 className="text-xl font-semibold mt-3 mb-4 text-white">{title}</h3>

      <p className="text-gray-300 leading-relaxed mb-6">{desc}</p>

      <p className="text-sm text-purple-300">{tech}</p>
    </div>
  );
}
