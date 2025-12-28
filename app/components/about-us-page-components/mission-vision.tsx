"use client";

import { ShieldCheck, Zap, Target, Lightbulb } from "lucide-react";

export default function AboutVisionMission() {
  return (
    <>
      {/* ================= ICON BAR ================= */}
      <section className="w-screen ml-[calc(50%-50vw)] bg-gradient-to-r from-[#5b2ea6] via-[#6f46d9] to-[#8a6bff] py-16">
        <div className="mx-auto flex max-w-[1200px] items-center justify-around px-6 text-white">
          
          <div className="flex flex-col items-center gap-3">
            <ShieldCheck className="h-[90px] w-[90px] stroke-white stroke-[2.4]" />
            <span className="text-sm font-semibold">Safety</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Zap className="h-[90px] w-[90px] stroke-white stroke-[2.4]" />
            <span className="text-sm font-semibold">Efficiency</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Target className="h-[90px] w-[90px] stroke-white stroke-[2.4]" />
            <span className="text-sm font-semibold">Precision</span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <Lightbulb className="h-[90px] w-[90px] stroke-white stroke-[2.4]" />
            <span className="text-sm font-semibold">Innovation</span>
          </div>

        </div>
      </section>
    </>
  );
}
