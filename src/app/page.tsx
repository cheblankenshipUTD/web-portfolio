"use client";

import { useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";

type Page = "home" | "about" | "projects" | "contact";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.25, ease: "easeOut" } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: "easeIn" } },
};

const listVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.2 } },
};

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  return (
    <div className="min-h-screen p-8 flex flex-col lg:flex-row">
      <aside className="flex flex-col items-start gap-4 lg:w-2/10">
        <button className="font-bold" onClick={() => setCurrentPage("home")}>
          che blankenship
        </button>

        <nav className="flex flex-col gap-2 items-start">
          {(["home", "about", "projects", "contact"] as Page[]).map((label) => (
            <button
              key={label}
              onClick={() => setCurrentPage(label)}
              className={[
                "px-3 py-2 rounded-md text-sm font-medium transition text-gray-700 hover:underline items-start text-left",
                currentPage === label ? "underline" : "",
              ].join(" ")}
            >
              {label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Page switcher */}
      <div className="mt-8 flex-1">
        <AnimatePresence mode="wait">
          <motion.main
            key={currentPage} // <-- important for exit/enter to run
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex flex-col gap-4"
          >
            {currentPage === "home" && <div className="text-lg" />}

            {currentPage === "about" && (
              <div className="flex flex-col text-lg">
                <div className="mb-4">
                  <p>Toyota Motor North America</p>
                  <p className="text-sm">2025 - current</p>
                  <p className="text-sm">Software Engineer</p>
                </div>
                <div className="mb-4">
                  <p>Lockheed Martin | Skunk Works</p>
                  <p className="text-sm">2023 - 2025</p>
                  <p className="text-sm">Software Engineer</p>
                </div>
              </div>
            )}

            {currentPage === "projects" && (
              <motion.div
                variants={listVariants}
                initial="hidden"
                animate="show"
                className="flex text-lg"
              >
                <ul>
                  <motion.li variants={itemVariants} className="mb-4">
                    <h3>KEEN Trading</h3>
                    <a className="text-sm underline" href="https://keen-trading.com/" target="_blank">
                      Website
                    </a>
                    <p className="text-sm">Drag and drop components to automatically trade stocks.</p>
                  </motion.li>

                  <motion.li variants={itemVariants} className="mb-4">
                    <h3>MAZE</h3>
                    <a
                      className="text-sm underline"
                      href="https://github.com/cheblankenshipUTD/maze-game"
                      target="_blank"
                    >
                      Github
                    </a>
                    <p className="text-sm">Bitmap maze game built with MIPS assembly.</p>
                  </motion.li>

                  <motion.li variants={itemVariants} className="mb-4">
                    <h3>Nebula Labs Planner (OSS contribution)</h3>
                    <a
                      className="text-sm underline"
                      href="https://github.com/UTDNebula/planner/pull/248"
                      target="_blank"
                    >
                      Link to Github PR
                    </a>
                  </motion.li>
                </ul>
              </motion.div>
            )}

            {currentPage === "contact" && (
              <div>
                <div className="text-sm">
                  email: <span className="underline">che.n.blankenship@icloud.com</span>
                </div>
                <div className="text-sm">
                  linkdin:{" "}
                  <a
                    className="text-sm underline"
                    href="https://www.linkedin.com/in/cheblankenship/"
                    target="_blank"
                  >
                    link to my linkedin
                  </a>
                </div>
                <div className="text-sm">
                  github:{" "}
                  <a
                    className="text-sm underline"
                    href="https://github.com/cheblankenshipUTD/"
                    target="_blank"
                  >
                    link to my github
                  </a>
                </div>
              </div>
            )}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}
