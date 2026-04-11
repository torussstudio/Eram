import ActionButton from "../../ui/ActionButton";
import { section, shell, getRevealClass } from "../../../constants/homeStyles";

export default function CTASection() {
  return (
    <section className={`${section} pt-[90px] pb-[110px] bg-[#ae1431]`}>

      <div
        className={`
          ${shell}

          ${getRevealClass()}

          flex
          flex-col
          items-center
          justify-center

          text-center

          bg-[#f5efe8]

          rounded-[32px]

         pt-[80px] pb-[85px]

          px-[40px]

          max-w-[1040px]

          mx-auto
        `}
      >

        {/* title */}
        <h2
          className="
            font-display

            text-[40px]

            leading-[1.15]

            tracking-[-0.02em]

            font-[600]

            text-[#111]

            mb-[10px]
          "
        >
          Begin the Journey.
        </h2>


        {/* description */}
        <p
          className="
            text-[15px]

            text-black

            mb-[28px]
          "
        >
          Admissions are now open across our institutions.
        </p>


        {/* buttons */}
        <div
          className="
            flex

            gap-[14px]

            flex-wrap

            justify-center
          "
        >

          {/* primary */}
          <button
            className="
              h-[42px]

              px-[22px]

              text-[13px]

              tracking-[0.04em]

              rounded-[10px]

              bg-[#ae1431]

              text-white

              hover:opacity-90

              transition
            "
          >
            APPLY NOW
          </button>


          {/* secondary */}
          <button
            className="
              h-[42px]

              px-[22px]

              text-[13px]

              tracking-[0.04em]

              rounded-[10px]

              border

              border-black/40

              text-[#111]

              hover:bg-[#ae1431]
              hover:text-white

              transition
            "
          >
            BOOK A CAMPUS VISIT
          </button>

        </div>

      </div>

    </section>
  );
}