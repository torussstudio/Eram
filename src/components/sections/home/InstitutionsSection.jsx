
import MarqueeText from "../../ui/Marquee";

export default function InstitutionsSection() {
  const institutions = [
    {
      title: "EASE (CBSE)",
    },
    {
      title: "MMPS (HS)",
    },
    {
      title: "MMHSS (Hr. Sec)",
    },
    {
      title: "AMLP (LP)",
    },
    {
      title: "MMITE (TTI)",
    },
  ];

  return (
   <section className="bg-[#f5efe8] pt-[40px] pb-[120px]">
      <div className="max-w-[1180px] mx-auto px-[24px]">
        <MarqueeText />

        <div className="max-w-[760px] mx-auto text-center">
          <h2 className="text-[44px] font-semibold tracking-[-0.02em] text-[#111]">
            The ERAM Learning Continuum
          </h2>

          <p className="mt-[18px] max-w-[820px] mx-auto text-[18px] leading-[1.65] text-black text-center">
            <span className="text-[#111] font-medium">
              An ecosystem designed to guide students from foundation to
              formation.
            </span>
            <br />
            From foundational schooling to teacher training, each institution
            strengthens a different stage of the learner’s journey.
          </p>
        </div>

        {/* cards */}
        <div className="mt-[70px] grid grid-cols-6 gap-[36px]">

  {institutions.map((item, i) => (

    <div
      key={i}
      className="
        border border-black
        rounded-[26px]
        p-[18px]
        bg-white
        
        col-span-2
        
        /* center last 2 cards */
        [&:nth-child(4)]:col-start-2
        [&:nth-child(5)]:col-start-4
      "
    >

      {/* image */}
      <div className="h-[260px] rounded-[18px] bg-[#f5efe8] flex items-center justify-center">

        <svg width="36" height="36" opacity="0.35">
          <rect width="36" height="36" fill="#999"/>
        </svg>

      </div>

      {/* title */}
      <h3 className="mt-[22px] text-[20px] font-[500] tracking-[0.02em] text-[#111]">

        {item.title}

      </h3>

      {/* link */}
      <button className="
mt-[14px]
text-[13px]
tracking-[0.14em]
uppercase
text-[#6d6d6d]

pb-[3px]              /* gap between text & line */
border-b-[2px]        /* thickness */
border-[#6d6d6d]      /* color */
inline-block
">

        View More

      </button>

    </div>

  ))}

</div>
      </div>
    </section>
  );
}
