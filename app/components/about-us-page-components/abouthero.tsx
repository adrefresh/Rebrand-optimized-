"use client";

export default function AboutHero() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <section className="relative flex h-[90vh] w-full items-center justify-center overflow-hidden text-center">
      {/* VIDEO */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={`${basePath}/images/about-page-videos-images/about-us-bg-video-back.mp4`}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/65" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-[900px] px-5 text-white">
        <h1 className="mb-4 text-[5rem] font-extrabold tracking-wide sm:text-[5rem]">
          WE&apos;RE ADREXIANS
        </h1>

        <p className="text-[1.25rem] opacity-90 sm:text-[1rem]">
          Built on experience. Driven by performance.
        </p>
      </div>
    </section>
  );
}
