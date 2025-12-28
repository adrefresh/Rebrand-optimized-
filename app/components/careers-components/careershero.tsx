"use client";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function CareersHero() {
  return (
    <section className="relative flex h-[90vh] items-center justify-center overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={`${basePath}/images/about-page-videos-images/1.mp4`}
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 text-center text-white">
        <h1 className="text-[clamp(3rem,8vw,6rem)] font-black tracking-[0.25em]">
          CAREERS
        </h1>
        <span className="mx-auto my-6 block h-[3px] w-20 bg-white" />
        <p className="tracking-[0.15em] uppercase opacity-90">
          Build the future with us
        </p>
      </div>
    </section>
  );
}
