"use client";

import { useState } from "react";

type Page = "home" | "about" | "projects" | "extras" | "contact";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  return (
    <div className="min-h-screen p-8 flex flex-col lg:flex-row">
      <aside className="flex flex-col items-start gap-4 lg:w-2/10">
        <button className="font-bold" key={"home"}
          onClick={() => setCurrentPage("home")}>che blankenship</button>
        <nav className="flex flex-col gap-2 itms-start">
          {(["home", "about", "projects", "extras", "contact"] as Page[]).map((label) => (
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

      <main className="mt-8 flex flex-col gap-4">
        {currentPage === "home" && <div className="text-lg"></div>}
        {currentPage === "about" &&
          <div className="flex flex-col text-lg">
            <div className="mb-4">
              <p className="">Toyota Motor North America</p>
              <p className="text-sm">2025 - current</p>
              <p className="text-sm">Software Engineer</p>
            </div>
            <div className="mb-4">
              <p className="">Lockheed Martin | Skunk Works</p>
              <p className="text-sm">2023 - 2025</p>
              <p className="text-sm">Software Engineer</p>
            </div>
          </div>
        }
        {currentPage === "projects" &&
          <div className="flex text-lg">
            <ul>
              <li className="mb-4">
                <h3 className="">KEEN Trading</h3>
                <a className="text-sm underline" href="https://keen-trading.com/" target="_blank">Website</a>
                <p className="text-sm">Drag and drop components to automatically trade stocks.</p>
              </li>
              <li className="mb-4">
                <h3 className="">MAZE</h3>
                <a className="text-sm underline" href="https://github.com/cheblankenshipUTD/maze-game" target="_blank">Github</a>
                <p className="text-sm">Bitmap maze game built with MIPS assembly.</p>
              </li>
              <li className="mb-4">
                <h3 className="">Nebula Labs Planner (OSS contribution)</h3>
                <a className="text-sm underline" href="https://github.com/UTDNebula/planner/pull/248" target="_blank">Link to Github PR</a>
              </li>
            </ul>
          </div>
        }
        {currentPage === "extras" &&
          <div className="flex flex-wrap text-sm mx-5">
            <div className="w-4/10 m-5">
              <img src="./imgs/abstract_news_01.png" />
              <p>news</p>
            </div>
            <div className="w-4/10 m-5">
              <img src="./imgs/what_is_art.png" />
              <p>what is art?</p>
            </div>
            <div className="w-4/10 m-5">
              <img src="./imgs/frank_ocean.png" />
              <p>frank ocean</p>
            </div>
            <div className="w-4/10 m-5">
              <img src="./imgs/uni_sphere.png" />
              <p>uni</p>
            </div>
          </div>
        }
        {currentPage === "contact" &&
          <div>
            <div className="text-sm">email:
              <span> </span>
              <span className="underline">che.n.blankenship@icloud.com</span>
            </div>
            <div className="text-sm">linkdin:
              <span> </span>
              <a className="text-sm underline" href="https://www.linkedin.com/in/cheblankenship/" target="_blank">link to my linkedin</a>
            </div>
          </div>
        }
      </main>
    </div>
  );
}
