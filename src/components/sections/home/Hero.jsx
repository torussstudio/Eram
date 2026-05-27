// import { useRef } from "react";
// import { gsap } from "gsap";
// import ActionButton from "../../ui/ActionButton";
// import { shell } from "../../../constants/homeStyles";
// import { useNavigate } from "react-router-dom";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useSmoothScroll } from "../../../hooks/useSmoothScroll";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// /* ─── Styles ──────────────────────────────────────────────────────────────── */
// const sectionCls = [
//   shell,
//   "isolate relative block",
//   "before:content-[''] before:absolute before:-top-[160px] before:bottom-0",
//   "before:w-[100vw] before:left-1/2 before:-translate-x-1/2",
//   "before:bg-[#f5efe8] before:-z-10",
//   "pb-[66px] pt-[43px]",
//   "max-[920px]:pb-[56px] max-[640px]:pt-[24px]",
// ].join(" ");

// const cardCls = [
//   "relative min-h-[650px] rounded-[20px] overflow-hidden",
//   "px-[60px] xl:px-[80px] 2xl:px-[110px]",
//   "pb-[92px] pt-[130px]",
//   "max-[920px]:px-[36px] max-[920px]:pt-[180px]",
//   "max-[640px]:px-6 max-[640px]:pt-[150px]",
//   "max-[420px]:px-4 max-[420px]:pt-[130px]",
//   "max-[767px]:mt-[10px]",
// ].join(" ");

// const headingCls =
//   "font-display font-light tracking-[-0.03em] leading-[0.95] " +
//   "text-[clamp(1.75rem,7vw,5.8rem)] text-white -mt-16";

// const descCls =
//   "mt-[34px] max-w-[680px] text-[1.05rem] leading-[1.65] text-white " +
//   "max-[640px]:max-w-full font-rethink";

// /* ─── Animation config ────────────────────────────────────────────────────── */
// const EASE = {
//   snappy: "power2.out",
//   smooth: "power3.out",
//   light: "power1.out",
// };

// /* ─── Component ───────────────────────────────────────────────────────────── */
// export default function Hero() {
//   const sectionRef = useRef(null);
//   const containerRef = useRef(null);
//   const line0Ref = useRef(null);
//   const line1Ref = useRef(null);
//   const sublineRef = useRef(null);
//   const descRef = useRef(null);
//   const buttonsRef = useRef(null);
//   const navigate = useNavigate();

//   const scrollTo = useSmoothScroll();

//   useGSAP(
//     () => {
//       if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

//       const mm = gsap.matchMedia();
//       const lines = () => [line0Ref.current, line1Ref.current];

//       /* ── Desktop ≥ 1280px — cinematic clip-reveal + parallax ─────────────── */
//       mm.add("(min-width: 1280px)", () => {
//         const tl = gsap.timeline({ delay: 0.1 });

//         tl.fromTo(
//           lines(),
//           {
//             opacity: 0,
//             y: 30,
//           },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.5,
//             stagger: 0.12,
//             ease: EASE.smooth,
//             clearProps: "all",
//           },
//         )
//           .fromTo(
//             sublineRef.current,
//             { opacity: 0 },
//             { opacity: 1, duration: 0.5, ease: EASE.light },
//             "-=0.5",
//           )
//           .fromTo(
//             descRef.current,
//             { opacity: 0, y: 16 },
//             { opacity: 1, y: 0, duration: 0.75, ease: EASE.snappy },
//             "-=0.55",
//           )
//           .fromTo(
//             buttonsRef.current,
//             { opacity: 0, y: 16 },
//             { opacity: 1, y: 0, duration: 0.75, ease: EASE.snappy },
//             "-=0.55",
//           );

//         // Subtle parallax on scroll
//         gsap.to(containerRef.current, {
//           yPercent: 4,
//           ease: "none",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top top",
//             end: "bottom top",
//             scrub: 0.2,
//             invalidateOnRefresh: true,
//           },
//         });

//         return () => {
//           tl.kill();
//         };
//       });

//       /* ── Tablet 768–1023px — moderate reveals, no parallax ──────────────── */
//       mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
//         const tl = gsap.timeline({ delay: 0.08 });

//         tl.fromTo(
//           lines(),
//           { opacity: 0, y: 30 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.75,
//             stagger: 0.1,
//             ease: EASE.smooth,
//           },
//         )
//           .fromTo(
//             sublineRef.current,
//             { opacity: 0 },
//             { opacity: 1, duration: 0.42, ease: EASE.light },
//             "-=0.38",
//           )
//           .fromTo(
//             descRef.current,
//             { opacity: 0, y: 12 },
//             { opacity: 1, y: 0, duration: 0.6, ease: EASE.snappy },
//             "-=0.42",
//           )
//           .fromTo(
//             buttonsRef.current,
//             { opacity: 0, y: 12 },
//             { opacity: 1, y: 0, duration: 0.6, ease: EASE.snappy },
//             "-=0.42",
//           );

//         return () => tl.kill();
//       });

//       /* ── Mobile < 768px — fade-only, no y travel, no parallax ───────────── */
//       mm.add("(max-width: 767px)", () => {
//         const tl = gsap.timeline({ delay: 0.05 });

//         tl.fromTo(
//           lines(),
//           { opacity: 0 },
//           { opacity: 1, duration: 0.4, stagger: 0.08, ease: EASE.light },
//         )
//           .fromTo(
//             sublineRef.current,
//             { opacity: 0 },
//             { opacity: 1, duration: 0.32, ease: EASE.light },
//             "-=0.18",
//           )
//           .fromTo(
//             descRef.current,
//             { opacity: 0 },
//             { opacity: 1, duration: 0.4, ease: EASE.light },
//             "-=0.20",
//           )
//           .fromTo(
//             buttonsRef.current,
//             { opacity: 0 },
//             { opacity: 1, duration: 0.38, ease: EASE.light },
//             "-=0.18",
//           );

//         return () => tl.kill();
//       });

//       return () => mm.revert();
//     },
//     { scope: sectionRef },
//   );

//   return (
//     <section ref={sectionRef} className={sectionCls} id="hero">
//       <div ref={containerRef} className={`${cardCls}`}>
//         {/* ── Media: LCP image first, video overlays ──────────────────────── */}
//         <div className="absolute inset-0">
//           <video
//             className="absolute inset-0 w-full h-full object-cover"
//             autoPlay
//             muted
//             loop
//             playsInline
//             preload="metadata"
//             disablePictureInPicture
//             disableRemotePlayback
//             poster="/images/institute.webp"
//           >
//             <source src="/videos/mainhero.mp4" type="video/mp4" />
//           </video>
//         </div>

//         {/* Overlay */}
//         <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

//         {/* Content */}
//         <div className="relative z-10 max-w-[1500px] pb-[100px] max-[640px]:pb-[20px] ml-[65px] max-[920px]:ml-[40px] max-[640px]:ml-0">
//           {/* H1 */}
//           <h1 className={headingCls}>
//             <span className=" pb-1 ">
//               <span ref={line0Ref} className="block">
//                 Building Foundations.
//               </span>
//             </span>
//             <span className=" pb-1 ">
//               <span ref={line1Ref} className="block">
//                 Shaping Futures.
//               </span>
//             </span>
//           </h1>

//           {/* Tagline */}
//           <p
//             ref={sublineRef}
//             className="font-rethink text-[22px] text-white mt-6"
//           >
//             Holistic, disciplined, and inclusive education for every child.
//           </p>

//           {/* Description */}
//           <p ref={descRef} className={descCls}>
//             A disciplined educational ecosystem nurturing academic excellence,
//             character, and opportunity.
//           </p>

//           {/* Buttons */}
//           <div ref={buttonsRef} className="mt-11 flex flex-wrap gap-[14px]">
//             <ActionButton
//               onClick={() => scrollTo("institutions")}
//               className="font-rethink !bg-[#ae1431] hover:!bg-black cursor-pointer"
//             >
//               Explore Our Institutions
//             </ActionButton>
//             <ActionButton
//               onClick={() => navigate("/contact")}
//               className="font-rethink !bg-[#f5efe8] !text-black hover:!bg-black hover:!text-[#f5efe8] cursor-pointer"
//             >
//               Admissions Open 2026-27
//             </ActionButton>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }


import { memo, useRef, useEffect } from "react";
import {gsap} from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ActionButton from "../../ui/ActionButton";
import { useSmoothScroll } from "../../../hooks/useSmoothScroll";

gsap.registerPlugin(ScrollTrigger);


function AboutHero() {
  const containerRef = useRef(null);

  const line0Ref = useRef(null);
  const line1Ref = useRef(null);
  const buttonsRef = useRef(null);

  const navigate = useNavigate();
  const smoothScrollTo = useSmoothScroll();

  useEffect(() => {
    const handleLoad = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // HERO IMAGE SCALE
      tl.fromTo(
        ".hero-img",
        { scale: 1.15 },
        {
          scale: 1.08,
          duration: 1.2,
          ease: "power3.out",
        }
      );

      // HEADING REVEAL
      tl.fromTo(
        ".hero-heading-line",
        { yPercent: 110 },
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
        },
        "-=1"
      );

      // CONTENT FADE
      tl.to(
        ".hero-content-fade",
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.8"
      );

      // PARALLAX — invalidateOnRefresh moved inside scrollTrigger ✅
      gsap.to(".hero-img", {
        y: 60,
        ease: "none",
        force3D: true,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true, // ✅ correct position
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      className="bg-[#F5EFE8] py-9 px-3 md:px-6"
    >
     <div className="rounded-[28px] overflow-hidden shadow-sm">
        {/* HERO */}
        <div className="relative min-h-[560px] sm:min-h-[620px] md:min-h-[660px] lg:min-h-[760px] w-full">

          <div className="absolute inset-0">
        <video
         className="absolute inset-0 w-full h-full object-cover scale-[1.02] will-change-transform"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          disablePictureInPicture
          disableRemotePlayback
          poster="/images/institute.webp"
          aria-hidden="true"
          onLoadedData={() => ScrollTrigger.refresh()}
        >
          <source src="/videos/mainhero.mp4" type="video/mp4" />
        </video>
      </div>

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40 sm:bg-black/35 md:bg-black/30" />

          {/* CONTENT */}
          <div className="absolute inset-0 flex items-center md:items-center">

            {/* MOBILE / TABLET */}
            <div
              className="
                w-full flex flex-col items-center text-center text-white
                px-6 pb-10 sm:px-12 sm:pb-14
                md:hidden
              "
            >
             <h1
  className="
    font-display
    leading-[1.05]
    text-[clamp(2.8rem,8vw,4.8rem)]
  "
>
  <span className="block overflow-hidden">
    <span className="hero-heading-line block">
      Building Foundations.
    </span>
  </span>

  <span className="block overflow-hidden">
    <span className="hero-heading-line block">
      Shaping Futures.
    </span>
  </span>
</h1>

              <p
                className="
                font-rethink
                  hero-content-fade mt-4
                  text-[0.8rem] sm:text-[0.9rem]
                  text-white/85 leading-[1.7]
                  max-w-[300px] sm:max-w-[420px]
                  opacity-0 translate-y-8
                "
              >
                Founded under the CSR vision of the Eram Group, ERAM
                Educational &amp; Welfare Trust was established to expand
                access to disciplined, value-based education across its
                institutions.
              </p>

             <button
  onClick={() => smoothScrollTo("institutions")}
                className="
                font-rethink
                  hero-content-fade mt-6
                  bg-white text-black
                  px-5 py-2.5 rounded-[12px]
                  text-xs font-medium
                  flex items-center gap-2
                  hover:bg-gray-200
                  transition
                  opacity-0 translate-y-8
                  cursor-pointer
                "
              >
                EXPLORE OUR INSTITUTIONS
                <Play className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* DESKTOP */}
            <div
              className="
                hidden md:block w-full text-white
                ml-[115px] lg:ml-[180px] pr-8
              "
            >
              <div className="max-w-[640px]">

                <h1
  className="
    font-display
    leading-[0.95]
    tracking-[-0.03em]

   text-[clamp(3.2rem,5vw,5.2rem)]

    flex
    flex-col
    
  "
>
  <span className="block ">
    <span className="hero-heading-line block">
      Building Foundations.
    </span>
  </span>

  <span className="block ">
    <span className="hero-heading-line block">
      Shaping Futures.
    </span>
  </span>
</h1>

                <p
                  className="
                    hero-content-fade mt-6
                    text-[1.4rem]
                    text-white/90
                    leading-relaxed
                    opacity-0 translate-y-8
                    font-rethink
                  "
                >
                 Holistic, disciplined, and inclusive education for every child.
                </p>

                <p
                  className="
                    hero-content-fade mt-4
                    text-[1.1rem]
                    text-white/90
                    leading-relaxed
                    opacity-0 translate-y-8
                    font-rethink
                  "
                >
                A disciplined educational ecosystem nurturing academic excellence, character, and opportunity.
                </p>

                <div ref={buttonsRef} className="mt-11 flex flex-wrap gap-[14px]">
             <ActionButton
               onClick={() => smoothScrollTo("institutions")}
               className="font-rethink !bg-[#ae1431] hover:!bg-black cursor-pointer"
             >
               Explore Our Institutions
             </ActionButton>
             <ActionButton
               onClick={() => navigate("/contact")}
               className="font-rethink !bg-[#f5efe8] !text-black hover:!bg-black hover:!text-[#f5efe8] cursor-pointer"
             >
               Admissions Open 2026-27
             </ActionButton>
           </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(AboutHero);



 