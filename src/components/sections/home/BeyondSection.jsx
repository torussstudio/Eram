import ActionButton from "../../ui/ActionButton";
import { section, shell, getRevealClass } from "../../../constants/homeStyles";

const beyondCards = [
  { code: "/01", title: "STEM CLUBS" },
  { code: "/02", title: "JCI & ROTARY" },
  { code: "/03", title: "TRAINING SESSIONS" },
  { code: "/04", title: "ACTIVITY" },
];

export default function BeyondSection() {
  return (
    <section id="beyond" className={`${section} pt-[90px] pb-[120px]`}>
      <div className={`${shell} text-center`}>
        {/* title */}
        <h2
          className="
            font-display
            text-[36px]
            leading-[1.2]
            font-[700]
            tracking-[-0.02em]
            text-[#111]
            mb-[14px]
          "
        >
           BEYOND THE CLASSROOM
        </h2>

        {/* description */}
        <p
          className="
            max-w-[560px]
            mx-auto
            text-[14px]
            leading-[1.7]
            text-[#444]
            mb-[26px]
          "
        >
          Clubs, leadership forums, residential programs, state-level
          participation, curated experiences, learning that extends beyond
          textbooks.
        </p>

        {/* button */}
        <div className="mb-[48px]">
          <ActionButton variant="secondary">
            Explore Student Pathways
          </ActionButton>
        </div>

        {/* horizontal scroll cards */}
 {/* cards */}
<div className="mt-[48px] w-[75%] mx-auto overflow-hidden">

  <div
    className="
      flex
      gap-[22px]

      overflow-x-auto
      scrollbar-hide

      pb-[16px]

      snap-x snap-mandatory
    "
  >

    {beyondCards.map((card, index) => {

      const isPrimary = card.code === "/01";

      return (
        <div
          key={card.title}
          className={`
            flex-none

            w-[350px]
            h-[225px]

            rounded-[22px]

            px-[30px]
            py-[28px]

            flex flex-col justify-between

            border

            snap-start

            ${
              isPrimary
                ? "bg-black text-white border-black"
                : "bg-transparent text-[#111] border-black/25"
            }

            ${getRevealClass(index)}
          `}
        >
          {/* number */}
          <div className="text-[25px] flex justify-start font-thin tracking-[0.16em] font-[700]  opacity-70">
            {card.code}
          </div>

          <div className="text-[23px] flex justify-end font-thin tracking-[0.01em] font-[500] text-center">
            {card.title}
          </div>

        </div>

      );

    })}

  </div>

</div>

        {/* divider */}
<div
  className="
    mt-[60px]
    border-t-[2px]
    border-black/20
    w-[75%]
    mx-auto
  "
/>
      </div>
    </section>
  );
}
