import SectionIntro from "../../ui/SectionIntro";
import { section, sectionBand, shell, getRevealClass } from "../../../constants/homeStyles";

const impactItems = [
  { code: "/01", title: "Free & subsidised education" },
  { code: "/02", title: "Free & subsidised education" },
  { code: "/03", title: "Free & subsidised education" },
  { code: "/04", title: "Free & subsidised education" },
];

export default function ImpactSection() {
  return (
    <section className={`${section} ${sectionBand}`} id="impact">
      {/* top content */}
      <div
        className={`
          ${shell}

          grid
          
          

         grid-cols-[1.05fr_0.95fr]

          max-[1100px]:grid-cols-1
        `}
      >
        {/* left images placeholder */}
        <div
          className="
    grid
    grid-cols-[0.85fr_1.15fr]
    ml-[160px]

    gap-[26px]

    items-end

    pt-[10px]
    
  "
        >
          {/* left small box */}
          <div
            className="
      h-[200px]
      w-[300px]

      rounded-[28px]

      bg-white/70

      backdrop-blur-[2px]
    "
          />

          {/* right tall box */}
          <div
            className="
      h-[300px]
      w-[300px]

      rounded-[28px]

      bg-white/70

      backdrop-blur-[2px]
    "
          />
        </div>

        {/* text */}
        <div
          className="
    max-w-[480px]

    pt-[25px] pl-[50px]
  "
        >
          {/* title */}
          <h2
            className="
      font-display

      text-[42px]

      leading-[1.12]

      tracking-[-0.02em]

      font-[600]

      text-[#111]

      mb-[18px]
    "
          >
            In Service Of Society
          </h2>

          {/* paragraph 1 */}
          <p
            className="
      text-[15px]

      leading-[1.75]

      text-black

      mb-[14px]
    "
          >
            ERAM Educational & Welfare Trust advances social equity through
            structured CSR initiatives focused on educational access, healthcare
            outreach, and community resilience.
          </p>

          {/* paragraph 2 */}
          <p
            className="
      text-[15px]

      leading-[1.75]

      text-black

      mb-[28px]
    "
          >
            While education remains its core mission, the Trust extends its
            responsibility through targeted social initiatives supporting
            underprivileged communities.
          </p>

          {/* button */}
          <button
            className="
      h-[44px]

      px-[22px]

      text-[13px]

      tracking-[0.04em]

      rounded-[10px]

      border

      border-black

      hover:bg-black

      hover:text-white

      transition
    "
          >
            EXPLORE STUDENT PATHWAYS
          </button>
        </div>
      </div>

      {/* divider area */}
      <div className="mt-[90px]">
        <p
          className="
            text-center

            text-[28px]

            tracking-[0.18em]

            uppercase

            text-black

            mb-[60px]
          "
        >
          Key Areas Of Impact Include:
        </p>

        {/* impact lines */}
        <div
          className={`
            ${shell}

            grid

            grid-cols-4

            max-[900px]:grid-cols-2
          `}
        >
          {impactItems.map((item, index) => (
            <div
              key={item.code}
              className={`
                relative

                pl-[26px]

                pr-[26px]

                min-h-[120px]

                flex
                flex-col
                justify-end

                ${getRevealClass(index)}
              `}
            >
              {/* vertical line */}
              <div
                className="
                  absolute

                  left-0

                  top-0

                  bottom-0

                  h-[225px]

                  w-[2px]

                  bg-black/25
                "
              />

              {/* number */}
              <span
                className="
                  text-[25px]

                  tracking-[0.16em]

                  text-black

                  mb-[70px]
                "
              >
                {item.code}
              </span>

              {/* title */}
              <p
                className="
                  text-[25px]

                  leading-[1.3]

                  text-[#111]

                  mt-[50px]
                "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
