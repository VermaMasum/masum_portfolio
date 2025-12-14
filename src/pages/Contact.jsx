import { motion, AnimatePresence } from "framer-motion";
import emailjs from "emailjs-com";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        "service_1vv02eg",
        "template_xjicfyz",
        e.target,
        "qNHoN_3RV-PXIENB4"
      )
      .then(() => {
        setStatus("success");
        setLoading(false);
        e.target.reset();
        setTimeout(() => setStatus(null), 4000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus("error");
        setLoading(false);
        setTimeout(() => setStatus(null), 4000);
      });
  };

  return (
    <>
      <section
        className="
          relative z-10
          min-h-screen
          px-6 md:px-20
          pt-[96px]
          pb-10
          flex flex-col
          justify-center
        "
      >
        {/* HEADER */}
        <div className="max-w-4xl mb-10">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
            Connect With Me
          </h2>
          <p className="text-lg text-gray-200">
            Let’s collaborate, build, or just have a conversation.
          </p>
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl mx-auto">
            {/* LEFT PANEL */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-900/90 border border-white/20 rounded-2xl p-7 space-y-5"
            >
              <p className="text-gray-200 text-sm leading-relaxed">
                I’m always open to discussing opportunities, projects,
                internships, or research collaborations.
              </p>

              <div className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/masum-verma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card block"
                >
                  🔗 LinkedIn
                </a>

                <a
                  href="https://github.com/VermaMasum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card block"
                >
                  💻 GitHub
                </a>

                <a
                  href="https://leetcode.com/u/Masum_Verma/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card block"
                >
                  🧠 LeetCode
                </a>
              </div>
            </motion.div>

            {/* RIGHT PANEL – EMAIL FORM */}
            <motion.form
              onSubmit={sendEmail}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-slate-900/90 border border-white/20 rounded-2xl p-7 space-y-4"
            >
              <input
                type="text"
                name="name"
                required
                className="contact-input"
                placeholder="Your Name"
              />

              <input
                type="email"
                name="email"
                required
                className="contact-input"
                placeholder="Your Email"
              />

              <textarea
                name="message"
                rows="3"
                required
                className="contact-input resize-none"
                placeholder="Message"
              />

              <button
                type="submit"
                disabled={loading}
                className="
                  w-full py-3 rounded-xl
                  bg-gradient-to-r from-purple-500 to-pink-500
                  text-white font-semibold
                  disabled:opacity-60
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <p className="text-xs text-gray-400 text-center">
                Or email me directly at{" "}
                <span className="text-purple-300">
                  vermamasum.test@gmail.com
                </span>
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* TOAST MESSAGE */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`
              fixed bottom-6 right-6 z-50
              px-6 py-4 rounded-xl text-sm font-medium
              ${
                status === "success"
                  ? "bg-green-500/90 text-white"
                  : "bg-red-500/90 text-white"
              }
              shadow-lg
            `}
          >
            {status === "success"
              ? "✅ Message sent successfully!"
              : "❌ Failed to send message. Please try again."}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
