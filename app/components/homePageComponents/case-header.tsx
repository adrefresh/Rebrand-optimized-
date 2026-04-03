
"use client";

import CaseStudies from "./case-studies";

export default function CaseHeader() {
  return (
    <section
      className="
        relative
        flex
        h-[60vh]
        w-screen
        items-center
        justify-center
        overflow-hidden
        ml-[calc(50%-50vw)]

bg-[radial-gradient(ellipse_700px_700px_at_top_left,#9b6bff_0%,#e9dcff_40%,transparent_70%),radial-gradient(ellipse_700px_700px_at_bottom_right,#9b6bff_0%,#e9dcff_40%,transparent_70%)]
      "
    >
      <div className="w-full max-w-225 px-3 text-center">
        <h2
          className="
            mb-4
            font-black
            leading-none
            tracking-[-2px]
            text-black
            text-[2.6rem]
            sm:text-[3.2rem]
            md:text-[3.8rem]
            lg:text-[4.4rem]
          "
        >
         SUCCESS STORIES
        </h2>

        <CaseStudies />
      </div>
    </section>
  );
}
