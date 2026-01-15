
"use client";

import { ShieldCheck, Zap, Target, Lightbulb } from "lucide-react";
import { LuBrain } from "react-icons/lu";
import { LuMousePointerClick } from "react-icons/lu";

export default function AboutVisionMission() {
  return (
    <>
      {/* ================= ICON BAR ================= */}
      <section className="w-screen ml-[calc(50%-50vw)] bg-gradient-to-r from-[#5b2ea6] via-[#6f46d9] to-[#8a6bff] py-12 sm:py-16">
        <div
          className="
            mx-auto
            max-w-[1200px]

            grid grid-cols-2 gap-y-10 gap-x-6     /* 📱 mobile */
            sm:flex sm:justify-between sm:gap-0 /* 💻 tablet+ */

            px-6
            text-white
          "
        >
          {/* ICON 1 */}
          <div className="flex flex-col items-center gap-3">
            <ShieldCheck className="h-[56px] w-[56px] sm:h-[70px] sm:w-[70px] lg:h-[90px] lg:w-[90px] stroke-white stroke-[2.4]" />
            <span className="text-sm font-semibold sm:text-base">
              Safety
            </span>
          </div>

          {/* ICON 2 */}
          <div className="flex flex-col items-center gap-3">
            <Zap className="h-[56px] w-[56px] sm:h-[70px] sm:w-[70px] lg:h-[90px] lg:w-[90px] stroke-white stroke-[2.4]" />
            <span className="text-sm font-semibold sm:text-base">
              Efficiency
            </span>
          </div>

          {/* ICON 3 */}
          <div className="flex flex-col items-center gap-3">
            <LuMousePointerClick className="h-[56px] w-[56px] sm:h-[70px] sm:w-[70px] lg:h-[90px] lg:w-[90px] stroke-white stroke-[2.4]" />
            <span className="text-sm font-semibold sm:text-base">
              Precision
            </span>
          </div>

          {/* ICON 4 */}
          <div className="flex flex-col items-center gap-3">
            <LuBrain className="h-[56px] w-[56px] sm:h-[70px] sm:w-[70px] lg:h-[90px] lg:w-[90px] stroke-white stroke-[2.4]" />
            <span className="text-sm font-semibold sm:text-base">
              Innovation
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
