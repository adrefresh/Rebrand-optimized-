
"use client";

import Image from "next/image";
import WhitePml from "@/public/images/FooterImages/whitePML.png";
import Soc from "@/public/images/FooterImages/SOC2.svg";
import iso from "@/public/images/FooterImages/iso2001.png";

export default function Footer() {
  return (
    <footer
      className="
        w-screen
        ml-[calc(50%-50vw)]
        relative
        text-black
        bg-[linear-gradient(to_bottom,#565656_0%,#949494_100%)]

        pt-[60px] pb-[40px]
        max-[900px]:pt-[48px]
        max-[480px]:pt-[40px]
      "
    >
      {/* WRAPPER */}
      <div
        className="
          relative
          max-w-[1400px]
          mx-auto
          grid
          grid-cols-[1.2fr_1fr_1fr]
          items-center
          gap-[40px]
          px-[40px]

          max-[1200px]:gap-[32px]
          max-[1024px]:px-[32px]

          max-[900px]:grid-cols-1
          max-[900px]:text-center
          max-[900px]:gap-[24px]
          max-[900px]:px-[24px]
        "
      >
        {/* LEFT — LOGO */}
        <div className="flex items-center max-[900px]:justify-center">
          <Image
            src={WhitePml}
            alt="AdRefresh Logo"
            width={160}
            height={90}
            className="
              w-[160px]
              h-auto
              object-contain
              block

              max-[1200px]:w-[150px]
              max-[1024px]:w-[140px]

              max-[900px]:w-[40vw]
              max-[900px]:max-w-[180px]

              max-[480px]:w-[46vw]
            "
          />
        </div>

        {/* CENTER — ISO */}
        <div className="flex justify-center items-center">
          <div
            className="
              flex
              gap-[20px]
              items-center
              justify-center

              max-[1024px]:gap-[16px]
              max-[480px]:gap-[14px]
            "
          >
            <Image
              src={iso}
              alt="ISO Certification"
              width={120}
              height={80}
              className="
                w-[120px]
                h-[80px]
                object-contain

                max-[1024px]:w-[110px] max-[1024px]:h-[72px]
                max-[900px]:w-[104px]  max-[900px]:h-[68px]
                max-[480px]:w-[92px]   max-[480px]:h-[60px]
              "
            />

            <Image
              src={Soc}
              alt="SOC Certification"
              width={120}
              height={80}
              className="
                w-[120px]
                h-[80px]
                object-contain

                max-[1024px]:w-[110px] max-[1024px]:h-[72px]
                max-[900px]:w-[104px]  max-[900px]:h-[68px]
                max-[480px]:w-[92px]   max-[480px]:h-[60px]
              "
            />
          </div>
        </div>

        {/* RIGHT — SOCIAL */}
        <div className="flex items-center justify-center">
          <div
            className="
              flex
              gap-[12px]
              items-center
              justify-center

              max-[480px]:gap-[10px]
            "
            role="navigation"
            aria-label="social links"
          >
            {["f", "𝕏", "in", "▶"].map((icon, i) => (
              <a
                key={i}
                href="#"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-black
                  font-bold
                  no-underline
                  transition-all
                  duration-200

                  w-[36px] h-[36px]
                  text-[14px]

                  hover:-translate-y-[2px]

                  max-[900px]:w-[40px]
                  max-[900px]:h-[40px]
                  max-[900px]:text-[16px]

                  max-[480px]:w-[36px]
                  max-[480px]:h-[36px]
                  max-[480px]:text-[14px]
                "
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* VERTICAL LINE */}
        <div
          aria-hidden="true"
          className="
            absolute
            left-[calc(100%/3.6)]
            top-[-32px]
            bottom-[60px]
            w-[2px]
            h-[130px]
            bg-black/35
            z-[5]

            max-[1200px]:left-[calc(100%/3.4)]
            max-[1024px]:left-[calc(100%/3.3)]
            max-[900px]:hidden
          "
        />
      </div>

      {/* HORIZONTAL LINE */}
      <div
        aria-hidden="true"
        className="
          mx-auto
          my-[20px]
          h-[2px]
          bg-black/35

          w-[70%]
          max-[900px]:w-[85%]
          max-[480px]:w-[90%]
        "
      />

      {/* BOTTOM TEXT */}
      <div
        className="
          text-center
          opacity-[0.85]

          text-[14px]
          max-[480px]:text-[13px]

          pb-[8px]
        "
      >
        © {new Date().getFullYear()} AdRefresh. All Rights Reserved.
      </div>
    </footer>
  );
}
