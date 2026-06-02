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
          invalidateOnRefresh: true, 
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



 