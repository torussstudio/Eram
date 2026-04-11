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
    <section className={`${section} ${sectionBand} bg-[#ae1431]`} id="impact">
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

      bg-white

      backdrop-blur-[2px]
    "
          />

          {/* right tall box */}
          <div
            className="
      h-[300px]
      w-[300px]

      rounded-[28px]

      bg-[#f5efe8]

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

      text-[#f5efe8]

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

      text-[#f5efe8]

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

     text-[#f5efe8]

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

      border-[#f5efe8]
      
bg-[#f5efe8]
      hover:bg-[#f5efe8]

      hover:text-[#ae1431]

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

            text-[#f5efe8]

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

                  bg-[#f5efe8]
                "
              />

              {/* number */}
              <span
                className="
                  text-[25px]

                  tracking-[0.16em]

                  text-[#f5efe8]

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

                  text-[#f5efe8]

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
