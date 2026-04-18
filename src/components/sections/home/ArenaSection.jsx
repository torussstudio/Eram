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
          max-[640px]:!w-[calc(100vw-24px)]

          bg-white

          rounded-[32px]
          max-[640px]:rounded-[22px]

          px-[110px]
          py-[120px]

          max-[900px]:px-[28px]
          max-[900px]:py-[80px]
          max-[640px]:px-[18px]
          max-[640px]:py-[56px]

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
            max-[640px]:gap-[28px]
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
                max-[640px]:text-[28px]
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
                max-[640px]:text-[14px]
                max-[640px]:mb-[26px]
              "
            >
              The ERAM Sports Arena reflects the Trust's long-term commitment to
              athletics, performance, and community engagement. Designed to host
              institutional and external events, it marks a new chapter in
              sports integration.
            </p>

            <div className="flex gap-[14px] flex-wrap max-[640px]:gap-[10px]">
              <ActionButton>
                Explore The Arena
              </ActionButton>

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
              max-[1000px]:min-h-[300px]
              max-[640px]:min-h-[200px]

              overflow-hidden
              rounded-[24px]
            `}
          >

            {/* VIDEO BACKGROUND */}
            <video
              autoPlay
              muted
              loop
              playsInline
              className="
                absolute
                inset-0
                w-full
                h-full
                object-cover
              "
            >
              <source src="/videos/arena.mp4" type="video/mp4" />
            </video>


            {/* optional overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/25" />


            {/* THE ERAM TEXT */}
            <div
              className="
                absolute

                right-[20px]
                bottom-[10px]

                font-display

                text-[clamp(3.4rem,4.6vw,5.4rem)]

                font-[900]

                tracking-[-0.045em]

                text-white

                max-[640px]:left-1/2
                max-[640px]:-translate-x-1/2
                max-[640px]:right-auto
                max-[640px]:bottom-0
                max-[640px]:text-[clamp(2.1rem,11vw,2.6rem)]
                max-[640px]:text-center
                max-[640px]:whitespace-nowrap
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

            max-[1000px]:left-[10px]
            max-[1000px]:bottom-[-30px]
            max-[1000px]:text-[clamp(4.8rem,15vw,8.2rem)]

            max-[640px]:left-1/2
            max-[640px]:-translate-x-1/2
            max-[640px]:bottom-[-14px]
            max-[640px]:text-[clamp(2.2rem,14vw,3.6rem)]
            max-[640px]:[-webkit-text-stroke:1.1px_black]
          "
        >
          SPORTS ARENA
        </div>

      </div>
    </section>
  );
}