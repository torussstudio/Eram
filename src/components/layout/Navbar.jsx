
// import ActionButton from "../ui/ActionButton"
// import { navItems } from "../../constants/homeData"
// import { shell } from "../../constants/homeStyles"

// export default function Navbar() {
//   return (
//     <header
//       className={`${shell}
      
//       sticky top-0 z-[60]

//       mt-6

//       mb-[-34px]

//       grid
//       min-h-[77px]

//       grid-cols-[222px_1fr_auto]

//       items-center

//       gap-7

//       rounded-[24px]

//       bg-[#ae1431]

//       pr-[18px]

//       max-[920px]:grid-cols-1
//       max-[920px]:justify-items-start
//       max-[920px]:rounded-[32px]
//       max-[920px]:p-[14px]
//       `}
//     >

//       {/* logo */}
//       <a
//         className="inline-flex h-full items-stretch self-stretch"
//         href="#hero"
//         aria-label="ERAM home"
//       >

//         <span
//           className="
//           relative

//           flex

//           h-[77px]
//           w-[222px]

//           items-center
//           justify-start

//          rounded-t-[24px]

//           bg-[#F5EFE8]

//           px-[28px]

//           pb-3
//           pl-[30px]
//           pt-[15px]
//         "
//         >

//           <img
//             className="block h-auto w-40 max-w-none object-contain"
//             src="/education-1.svg"
//             alt="ERAM Education"
//           />

//         </span>

//       </a>



//       {/* menu */}
//       <nav
//         className="
//         flex

//         flex-wrap

//         justify-center

//         gap-[93px]

//         max-[920px]:w-full
//         max-[920px]:justify-start

//         max-[640px]:gap-x-[22px]
//         max-[640px]:gap-y-[14px]
//         "
//         aria-label="Primary"
//       >

//         {navItems.map((item) => (

//           <a
//             key={item}

//             href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}

//             className="
//             text-[0.9rem]

//             font-medium

//             uppercase

//             tracking-[-0.01em]

//             text-[#F5EFE8]
//             "
//           >
//             {item}
//           </a>

//         ))}

//       </nav>



//       {/* right buttons */}
//       <div
//         className="
//         flex

//         gap-[18px]

//         max-[920px]:w-full
//         max-[920px]:justify-start

//         max-[640px]:flex-col
//         max-[640px]:items-stretch
//         max-[640px]:gap-3
//         "
//       >

//         <ActionButton variant="ghost" className="!text-[#F5EFE8] !border-[#F5EFE8]/65 hover:!bg-white/10">
//           Parent Portal
//         </ActionButton>

//         <ActionButton variant="ghost" className="!text-[#F5EFE8] !border-[#F5EFE8]/65 hover:!bg-white/10">
//           News & Updates
//         </ActionButton>

//       </div>

//     </header>
//   )
// }

import { useState } from "react"
import ActionButton from "../ui/ActionButton"
import { navItems } from "../../constants/homeData"
import { shell } from "../../constants/homeStyles"

export default function Navbar() {

  const [open,setOpen] = useState(false)

  return (
    <header
      className={`${shell}
      
      sticky top-0 z-[60]

      mt-6
      mb-[-34px]

      grid
      min-h-[77px]

      grid-cols-[222px_1fr_auto]

      items-center

      gap-7

      rounded-[24px]

      bg-[#ae1431]

      pr-[18px]

      max-[920px]:grid-cols-[1fr_auto]
      max-[920px]:p-[14px]
      `}
    >

      {/* logo */}
      <a
        className="inline-flex h-full items-stretch self-stretch"
        href="#hero"
        aria-label="ERAM home"
      >

        <span
          className="
          relative

          flex

          h-[77px]
          w-[222px]

          items-center
          justify-start

          rounded-t-[24px]

          bg-[#F5EFE8]

          px-[28px]

          pb-3
          pl-[30px]
          pt-[15px]

          max-[920px]:h-[60px]
          "
        >

          <img
            className="block h-auto w-40 max-w-none object-contain"
            src="/education-1.svg"
            alt="ERAM Education"
          />

        </span>

      </a>


      {/* toggle button */}
      <button
        onClick={()=>setOpen(!open)}
        className="
        hidden

        max-[920px]:flex

        h-[44px]
        w-[44px]

        items-center
        justify-center

        rounded-xl

        border border-[#F5EFE8]/60
        "
      >

        <div className="space-y-1">
          <span className="block h-[2px] w-5 bg-[#F5EFE8]" />
          <span className="block h-[2px] w-5 bg-[#F5EFE8]" />
          <span className="block h-[2px] w-5 bg-[#F5EFE8]" />
        </div>

      </button>



      {/* desktop menu */}
      <nav
        className="
        flex

        flex-wrap

        justify-center

        gap-[93px]

        max-[920px]:hidden
        "
        aria-label="Primary"
      >

        {navItems.map((item) => (

          <a
            key={item}

            href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}

            className="
            text-[0.9rem]

            font-medium

            uppercase

            tracking-[-0.01em]

            text-[#F5EFE8]
            "
          >
            {item}
          </a>

        ))}

      </nav>



      {/* desktop buttons */}
      <div
        className="
        flex

        gap-[18px]

        max-[920px]:hidden
        "
      >

        <ActionButton variant="ghost" className="!text-[#F5EFE8] !border-[#F5EFE8]/65 hover:!bg-white/10">
          Parent Portal
        </ActionButton>

        <ActionButton variant="ghost" className="!text-[#F5EFE8] !border-[#F5EFE8]/65 hover:!bg-white/10">
          News & Updates
        </ActionButton>

      </div>



      {/* mobile menu */}
      {
        open && (

          <div
            className="
            col-span-2

            mt-4

            flex

            flex-col

            gap-5

            rounded-2xl

            bg-[#ae1431]

            p-4

            max-[920px]:border-t border-white/20
            "
          >

            <nav
              className="
              flex

              flex-col

              gap-4
              "
            >

              {navItems.map((item) => (

                <a
                  key={item}

                  href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}

                  onClick={()=>setOpen(false)}

                  className="
                  text-sm

                  font-medium

                  uppercase

                  text-[#F5EFE8]
                  "
                >
                  {item}
                </a>

              ))}

            </nav>



            <div className="flex flex-col gap-3">

              <ActionButton variant="ghost" className="!text-[#F5EFE8] !border-[#F5EFE8]/65">
                Parent Portal
              </ActionButton>

              <ActionButton variant="ghost" className="!text-[#F5EFE8] !border-[#F5EFE8]/65">
                News & Updates
              </ActionButton>

            </div>

          </div>

        )
      }

    </header>
  )
}