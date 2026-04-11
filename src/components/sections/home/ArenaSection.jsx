import ActionButton from "../../ui/ActionButton";
import { section, sectionBand, shell, getRevealClass } from "../../../constants/homeStyles";

export default function ArenaSection() {
  return (
    <section id="arena" className={`${section} ${sectionBand} bg-[#ae1431]`}>
      <div
        className={`
          ${shell}

          !max-w-[1580px]
          !w-[calc(100vw-64px)]

          bg-white

          rounded-[32px]

          px-[110px]
          py-[120px]

          max-[900px]:px-[28px]
          max-[900px]:py-[80px]

          relative
          overflow-hidden
        `}
      >
        <div
          className="
            grid
            gap-[40px]

            [grid-template-columns:minmax(0,0.85fr)_minmax(0,1.15fr)]

            max-[1000px]:grid-cols-1
          "
        >
          {/* LEFT */}
          <div className="max-w-[460px]">
            <h2
              className="
                font-display
                text-[34px]
                leading-[1.22]
                font-[700]
                tracking-[-0.02em]
                text-[#111]
                mb-[20px]
              "
            >
              A Destination for
              <br />
              Sport & Performance
            </h2>

            <p
              className="
                text-[14.5px]
                leading-[1.75]
                text-[#222]
                mb-[34px]
              "
            >
              The ERAM Sports Arena reflects the Trust's long-term commitment to
              athletics, performance, and community engagement. Designed to host
              institutional and external events, it marks a new chapter in
              sports integration.
            </p>

            <div className="flex gap-[14px] flex-wrap">
              <ActionButton>Explore The Arena</ActionButton>

              <ActionButton variant="secondary">
                Discover Our Infrastructure
              </ActionButton>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`
              ${getRevealClass()}
              relative
              min-h-[520px]
            `}
          >
            {/* THE ERAM */}
            <div
              className="
                absolute

                right-[20px]
                bottom-[10px]

                font-display

                text-[clamp(3.4rem,4.6vw,5.4rem)]

                font-[900]

                tracking-[-0.045em]

                text-[#111]
              "
            >
              THE ERAM
            </div>
          </div>
        </div>

        {/* SPORTS ARENA outline */}
    <div
  className="
    absolute

    left-[20px]

    bottom-[-48px]

    font-display

    text-[clamp(7.2rem,13.2vw,14rem)]

    font-[700]

    tracking-[-0.045em]

    leading-[0.88]

    text-transparent
   

    [-webkit-text-stroke:1.6px_black]

    pointer-events-none
    select-none

    whitespace-nowrap
    
  "
>
  SPORTS ARENA
</div>
      </div>
    </section>
  );
}
