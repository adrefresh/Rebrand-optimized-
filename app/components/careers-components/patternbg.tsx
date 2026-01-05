
"use client";

export default function PatternBackground() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div
      aria-hidden
      className="
        pointer-events-none
        absolute
        inset-x-0
        top-0
        h-40
        z-0
        opacity-[0.7]
        bg-repeat
      "
      style={{
        backgroundImage: `url('${basePath}/images/service-page-images-videos/GrayOutline.svg')`,
        backgroundSize: "500px",
        backgroundPosition: "top center",
        WebkitMaskImage:
          "linear-gradient(to bottom, black 20%, transparent 85%)",
        maskImage:
          "linear-gradient(to bottom, black 20%, transparent 85%)",
      }}
    />
  );
}
