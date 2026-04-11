import ActionButton from "../../ui/ActionButton";
import { shell } from "../../../constants/homeStyles";

export default function Hero() {
  return (
    <section
      className={`${shell}

      isolate
      before:content-[''] before:absolute before:-top-[200px] before:bottom-0 before:w-[100vw] before:left-1/2 before:-translate-x-1/2 before:bg-[#ae1431] before:-z-10
      relative
      block

      pb-[66px]
      pt-[37px]

      max-[920px]:pb-[56px]
      `}
      id="hero"
    >
      <div
        className="
        relative

        min-h-[650px]

        rounded-[24px]
        rounded-tl-none

        bg-[#F5EFE8]

        px-[92px]

        pb-[92px]

        pt-[220px]

        max-[920px]:min-h-[620px]

        max-[920px]:px-[44px]

        max-[920px]:pb-[54px]

        max-[920px]:pt-[250px]

        max-[640px]:min-h-[520px]

        max-[640px]:px-6

        max-[640px]:pb-[34px]

        max-[640px]:pt-[220px]
        "
      >

        {/* text container */}
        <div className="max-w-[1200px] pb-[100px]">

          {/* heading */}
     <h1
  className="
  font-display

  m-0

  text-[clamp(4.2rem,5vw,5.4rem)]

  leading-[0.95]

  tracking-[-0.02em]

  text-[#111]
"
>
  An Institutional 
  <br />
   Movement of Purpose
</h1>


          {/* paragraph */}
          <p
            className="
            mt-[34px]

            max-w-[600px]

            text-[0.95rem]

            leading-[1.6]

            tracking-[-0.005em]

            text-[#616161]

            max-[640px]:max-w-full
            "
          >
            ERAM Education was established to build disciplined, value-based
            institutions that expand access to quality learning and reach
            communities that need it most. Founded under the CSR vision of the
            Eram Group of Companies, it upholds structured academic standards
            while serving communities with integrity.
          </p>


          {/* buttons */}
          <div
            className="
            mt-11

            flex
            flex-wrap

            gap-[14px]
            "
          >
            <ActionButton>
              Explore Our Institutions
            </ActionButton>

            <ActionButton variant="secondary">
              Admissions Open 2026-27
            </ActionButton>
          </div>

        </div>

      </div>
    </section>
  );
}