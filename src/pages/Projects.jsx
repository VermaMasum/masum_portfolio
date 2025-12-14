import { useRef } from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Admin & Employee Dashboard for Task Tracking",
    desc: "Developed a task tracking system where employees submit daily work reports, and admins assign tasks and monitor employee progress.",
    tech: "MongoDB • Next.js • React • Express • Node.js",
  },
  {
    title: "Dating Places Discovery Platform",
    desc: "Worked on a client-based internship project, developing backend APIs and admin dashboard features for a NYC-based dating places discovery platform with role-based access control.",
    tech: "PostgreSQL • Node.js • Next.js • React • Prisma",
  },
  {
    title: "Pothole Detection System",
    desc: "Built a real-time pothole detection system using the YOLO object detection algorithm for automated road condition analysis.",
    tech: "Machine Learning • YOLO • Object Detection",
  },
  {
    title: "3D Home Catalog Visualization",
    desc: "Designed and developed an interactive 3D virtual home using React.js, Three.js, and Blender for real-time visualization.",
    tech: "React • Three.js • Blender",
  },
  {
    title: "Machine Unlearning: Comparative Analysis (Ongoing)",
    desc: "Performing a comparative analysis of machine unlearning algorithms on image datasets to evaluate efficiency, accuracy, and impact on model performance.",
    tech: "Machine Learning • Machine Unlearning • Research",
  },
];

const CARD_WIDTH = 420;
const GAP = 64; // gap-16
const SCROLL_AMOUNT = CARD_WIDTH + GAP;

export default function Projects() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    scrollRef.current.scrollBy({
      left: direction === "left" ? -SCROLL_AMOUNT : SCROLL_AMOUNT,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative z-10 min-h-screen px-6 md:px-24 pt-32">
      {/* PROJECTS HEADER */}
      <div className="relative z-20 max-w-3xl mb-16">
        {/* soft background dim ONLY for text area */}
        <div className="absolute inset-0 -z-10 bg-black/30 blur-2xl rounded-full" />

        <h2
          className="
      text-5xl md:text-6xl font-extrabold mb-6
      bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300
      bg-clip-text text-transparent
      drop-shadow-[0_6px_18px_rgba(0,0,0,0.9)]
    "
        >
          Projects
        </h2>

        <p
          className="
      text-lg md:text-xl
      text-purple-100
      leading-relaxed
      drop-shadow-[0_4px_14px_rgba(0,0,0,0.85)]
    "
        >
          A selection of projects showcasing my work across full-stack
          development, 3D visualization, and machine learning.
        </p>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={() => scroll("left")}
        className="
          fixed
          left-6
          top-1/2
          -translate-y-1/2
          z-50
          p-4
          rounded-full
          bg-black/60
          backdrop-blur-md
          border border-white/20
          text-white
          hover:bg-purple-500/30
          transition
        "
      >
        ←
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={() => scroll("right")}
        className="
          fixed
          right-6
          top-1/2
          -translate-y-1/2
          z-50
          p-4
          rounded-full
          bg-black/60
          backdrop-blur-md
          border border-white/20
          text-white
          hover:bg-purple-500/30
          transition
        "
      >
        →
      </button>

      {/* PROJECT CAROUSEL */}
      <div
        ref={scrollRef}
        className="
          flex gap-16
          overflow-x-scroll
          scrollbar-hide
          scroll-smooth
          snap-x snap-mandatory
          pb-10
        "
      >
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            index={i}
            title={project.title}
            desc={project.desc}
            tech={project.tech}
          />
        ))}
      </div>
    </section>
  );
}
