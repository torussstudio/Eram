// import { section, sectionBand, shell, getRevealClass } from "../../../constants/homeStyles";

// const impactItems = [
//   { code: "/01", title: "Free & subsidised education" },
//   { code: "/02", title: "Free & subsidised education" },
//   { code: "/03", title: "Free & subsidised education" },
//   { code: "/04", title: "Free & subsidised education" },
//    { code: "/05", title: "Free & subsidised education" },
//     { code: "/06", title: "Free & subsidised education" },
// ];

// export default function ImpactSection() {
//   return (
//     <section className={`${section}  bg-[#ae1431]`} id="impact">
//       {/* top content */}
//       <div
//         className={`
//           ${shell}

//           grid

//          grid-cols-[1.05fr_0.95fr]

//           max-[1100px]:grid-cols-1
//         `}
//       >
//         {/* left images placeholder */}
//         <div
//           className="
//     grid
//     grid-cols-[0.85fr_1.15fr]
//     ml-[160px]
//     gap-[26px]
//     items-end
//     pt-[10px]
//     max-[1280px]:ml-[60px]
//     max-[1100px]:ml-0
//     max-[640px]:grid-cols-1
//     max-[640px]:justify-items-center
//   "
//         >
//           {/* left small box */}
//           <div
//             className="
//       h-[200px]
//       w-[300px]

//       rounded-[28px]

//       bg-white

//       backdrop-blur-[2px]
//       max-[640px]:w-full
//       max-[640px]:max-w-[320px]
//     "
//           />

//           {/* right tall box */}
//           <div
//             className="
//       h-[300px]
//       w-[300px]

//       rounded-[28px]

//       bg-[#f5efe8]

//       backdrop-blur-[2px]
//       max-[640px]:w-full
//       max-[640px]:max-w-[320px]
//     "
//           />
//         </div>

//         {/* text */}
//         <div
//           className="
//     max-w-[480px]
//     pt-[25px] pl-[50px]
//     max-[1100px]:pl-0
//     max-[1100px]:pt-[36px]
//   "
//         >
//           {/* title */}
//           <h2
//             className="
//       font-display

//       text-[42px]

//       leading-[1.12]

//       tracking-[-0.02em]

//       font-[600]

//       text-[#f5efe8]

//       mb-[18px]
//       max-[640px]:text-[34px]
//     "
//           >
//             In Service Of Society
//           </h2>

//           {/* paragraph 1 */}
//           <p
//             className="
//       text-[15px]

//       leading-[1.75]

//       text-[#f5efe8]

//       mb-[14px]
//     "
//           >
//             ERAM Educational & Welfare Trust advances social equity through
//             structured CSR initiatives focused on educational access, healthcare
//             outreach, and community resilience.
//           </p>

//           {/* paragraph 2 */}
//           <p
//             className="
//       text-[15px]

//       leading-[1.75]

//      text-[#f5efe8]

//       mb-[28px]
//       max-[640px]:text-[14px]
//     "
//           >
//             While education remains its core mission, the Trust extends its
//             responsibility through targeted social initiatives supporting
//             underprivileged communities.
//           </p>

//           {/* button */}
//           <button
//             className="
//       h-[44px]

//       px-[22px]

//       text-[13px]

//       tracking-[0.04em]

//       rounded-[10px]

//       border

//       border-[#f5efe8]

// bg-[#f5efe8]
//       hover:bg-[#f5efe8]

//       hover:text-[#ae1431]

//       transition
//       max-[640px]:w-full
//     "
//           >
//             EXPLORE STUDENT PATHWAYS
//           </button>
//         </div>
//       </div>

//       {/* divider area */}
//       <div className="mt-[90px] max-[640px]:mt-[64px]">
//         <p
//           className="
//             text-center

//             text-[28px]

//             tracking-[0.18em]

//             uppercase

//             text-[#f5efe8]

//             mb-[60px]
//             max-[900px]:text-[24px]
//             max-[640px]:mb-[38px]
//             max-[640px]:text-[18px]
//             max-[640px]:tracking-[0.1em]
//           "
//         >
//           Key Areas Of Impact Include:
//         </p>

//         {/* impact lines */}
//        <div
//   className="
//     flex

//     justify-center

//     gap-[40px]

//     overflow-x-auto
//     scroll-smooth

//     snap-x
//     snap-mandatory

//     pb-[20px]

//     scrollbar-hide

//     px-[40px]
//   "
// >
//           {impactItems.map((item, index) => (
//             <div
//               key={item.code}
//               className={`
//                 relative

//                 pl-[26px]

//                 pr-[26px]

//                min-h-[120px]

// w-[260px]
// flex-none

// snap-start

//                 flex
//                 flex-col
//                 justify-end

//                 max-[640px]:min-h-[94px]
//                 ${getRevealClass(index)}
//               `}
//             >
//               {/* vertical line */}
//               <div
//                 className="
//                   absolute

//                   left-0

//                   top-0

//                   bottom-0

//                   h-[225px]

//                   w-[2px]

//                   bg-[#f5efe8]
//                   max-[640px]:h-[160px]
//                 "
//               />

//               {/* number */}
//               <span
//                 className="
//                   text-[25px]

//                   tracking-[0.16em]

//                   text-[#f5efe8]

//                   mb-[70px]
//                   max-[640px]:mb-[44px]
//                   max-[640px]:text-[20px]
//                 "
//               >
//                 {item.code}
//               </span>

//               {/* title */}
//               <p
//                 className="
//                   text-[25px]

//                   leading-[1.3]

//                   text-[#f5efe8]

//                   mt-[50px]
//                   max-[640px]:mt-[28px]
//                   max-[640px]:text-[20px]
//                 "
//               >
//                 {item.title}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

import { section, shell, getRevealClass } from "../../../constants/homeStyles";

const impactItems = [
  { code: "/01", title: "Free & subsidised education" },
  { code: "/02", title: "Free & subsidised education" },
  { code: "/03", title: "Free & subsidised education" },
  { code: "/04", title: "Free & subsidised education" },
  { code: "/05", title: "Free & subsidised education" },
  { code: "/06", title: "Free & subsidised education" },
];

export default function ImpactSection() {
  return (
    <section
      className={`
        ${section}

        bg-[#ae1431]
      `}
      id="impact"
    >
      {/* top layout */}
      <div
        className={`
          ${shell}

          grid

          grid-cols-[1.05fr_0.95fr]

          max-[1100px]:grid-cols-1
        `}
      >
        {/* image placeholders */}
        <div
          className="
            grid

            grid-cols-[0.85fr_1.15fr]

            ml-[160px]

            gap-[26px]

            items-end

            pt-[10px]

            max-[1280px]:ml-[60px]

            max-[1100px]:ml-0

            max-[640px]:grid-cols-1

            max-[640px]:justify-items-center
          "
        >
          <div
            className="
              h-[200px]

              w-[300px]

              rounded-[28px]

              bg-white

              max-[640px]:w-full

              max-[640px]:max-w-[320px]
            "
          />

          <div
            className="
              h-[300px]

              w-[300px]

              rounded-[28px]

              bg-[#f5efe8]

              max-[640px]:w-full

              max-[640px]:max-w-[320px]
            "
          />
        </div>

        {/* text content */}
        <div
          className="
            max-w-[480px]

            pt-[25px]

            pl-[50px]

            max-[1100px]:pl-0

            max-[1100px]:pt-[36px]
          "
        >
          <h2
            className="
              text-[42px]

              leading-[1.12]

              font-[600]

              text-[#f5efe8]

              mb-[18px]

              max-[640px]:text-[34px]
            "
          >
            In Service Of Society
          </h2>

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

          <p
            className="
              text-[15px]

              leading-[1.75]

              text-[#f5efe8]

              mb-[28px]

              max-[640px]:text-[14px]
            "
          >
            While education remains its core mission, the Trust extends its
            responsibility through targeted social initiatives supporting
            underprivileged communities.
          </p>

          <button
            className="
              h-[44px]

              px-[22px]

              text-[13px]

              rounded-[10px]

              border

              border-[#f5efe8]

              bg-[#f5efe8]

              text-[#ae1431]

              transition

              max-[640px]:w-full
            "
          >
            EXPLORE STUDENT PATHWAYS
          </button>
        </div>
      </div>

      {/* divider title */}
      <div
        className="
          mt-[90px]

          max-[640px]:mt-[64px]
        "
      >
        <p
          className="
            text-center

            text-[28px]

            tracking-[0.18em]

            uppercase

            text-[#f5efe8]

            mb-[60px]

            max-[900px]:text-[24px]

            max-[640px]:mb-[38px]

            max-[640px]:text-[18px]
          "
        >
          Key Areas Of Impact Include:
        </p>

        {/* scroll wrapper */}
        <div className={`${shell} overflow-hidden`}>
          <div
            className="
           flex
gap-[20px]
px-[32px]
overflow-x-auto

              scroll-smooth

              snap-x

              snap-mandatory

              pb-[20px]

              scrollbar-hide
            "
          >
            {impactItems.map((item, index) => (
              <div
                key={item.code}
                className={`
                  relative

                  w-[350px]

                  flex-none

                  snap-start

                  pl-[26px]

                  pr-[26px]

                  min-h-[120px]

                  flex

                  flex-col

                  justify-end

                  max-[640px]:min-h-[94px]

                  ${getRevealClass(index)}
                `}
              >
                {/* vertical line */}
                <div
                  className="
                    absolute

                    left-0

                    top-0

                    h-[225px]

                    w-[2px]

                    bg-[#f5efe8]

                    max-[640px]:h-[160px]
                  "
                />

                {/* number */}
                <span
                  className="
                    text-[25px]

                    tracking-[0.16em]

                    text-[#f5efe8]

                    mb-[70px]

                    max-[640px]:mb-[44px]

                    max-[640px]:text-[20px]
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

                    max-[640px]:mt-[28px]

                    max-[640px]:text-[20px]
                  "
                >
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
