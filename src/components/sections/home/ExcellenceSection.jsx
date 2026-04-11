import { useState } from "react";
import { excellenceDomains } from "../../../constants/homeData";

export default function ExcellenceSection() {
  const categories = ["ACADEMIC", "SPORTS", "CULTURAL", "PROFESSIONAL"];

  const [active, setActive] = useState("ACADEMIC");

  return (
    <section
      className="
        bg-[#f7f7f7]

        py-[120px]
      "
      id="excellence"
    >
      <div
        className="
          max-w-[1180px]

          mx-auto

          px-[24px]

          grid

          grid-cols-[260px_1fr]

          gap-[60px]

          max-[900px]:grid-cols-1
        "
      >
        {/* left menu */}
        <div
          className="
            pt-[20px]

            flex
            flex-col

            gap-[22px]
          "
        >
          {categories.map((item) => {
            const isActive = active === item;

            return (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`

                  text-left

                  text-[22px]

                  tracking-[0.16em]

                  font-[400]

                  transition-all

                  duration-200

                  ${
                    isActive
                      ? "text-[#111]"
                      : "text-[#a3a3a3] hover:text-[#666]"
                  }

                `}
              >
                {isActive && "//"}

                {item}
              </button>
            );
          })}
        </div>

        {/* right content */}
        <div className="max-w-[680px] ml-[80px]">
          {/* heading */}
          <h2
            className="
              text-[48px]

              font-[600]

              tracking-[-0.02em]

              text-[#111]

              mb-[56px]
            "
          >
            Excellence Across Every Domain
          </h2>

          {/* grid */}
          <div
            className="
              grid

              grid-cols-2

              gap-[32px]

              max-[560px]:grid-cols-1
            "
          >
            {excellenceDomains.map((item, i) => (
              <div
                key={i}
                className="
                  h-[320px]

                  rounded-[28px]

                  border

                  border-[#cfcfcf]

                  bg-[#e6e6e6]

                  flex

                  items-center

                  justify-center
                "
              >
                {/* placeholder icon */}
                <svg width="42" height="42" opacity="0.45">
                  <rect width="42" height="42" fill="#9a9a9a" />
                </svg>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            className="
              mt-[56px]

              flex

              justify-center
            "
          >
            <button
              className="
                px-[28px]

                py-[12px]

                text-[13px]

                tracking-[0.16em]

                uppercase

                text-[#222]

                border

                border-[#bfbfbf]

                rounded-[10px]
                mr-[450px]

                transition-all

                duration-200

                hover:bg-[#111]

                hover:text-white
              "
            >
              Explore Excellence
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
