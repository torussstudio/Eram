// export default function SystemsSection() {
//   return (
//     <section className="bg-[#f5efe8] py-[90px] overflow-hidden">
//       {/* Tabs */}
//       <div className="flex justify-center mb-[70px]">
//         <div className="flex gap-[120px] border-b-[2px] border-[#e5e5e5]">
//           <div className="pb-[18px] text-[18px] font-medium tracking-[0.12em] uppercase text-[#9a9a9a] border-b-[2px] border-transparent text-center">
//             Leadership and
//             <br />
//             Management Structure
//           </div>

//           <div className="pb-[18px] text-[18px] font-medium tracking-[0.12em] uppercase text-[#9a9a9a] border-b-[2px] border-transparent text-center">
//             Infrastructure and
//             <br />
//             Operational Excellence
//           </div>

//           <div className="pb-[18px] text-[18px] font-medium tracking-[0.12em] uppercase text-[#ae1431] border-b-[3px] border-[#111] text-center">
//             Institutional
//             <br />
//             Systems & Leadership
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="flex items-start gap-[80px] pl-[325px] pr-[80px]">
//         {/* Left */}
//         <div className="max-w-[420px]">
//           <h2 className="text-[42px] font-black text-[#111] leading-[1.1] mb-[24px]">
//             Systems That
//             <br />
//             Sustain Excellence
//           </h2>

//           <p className="text-[13.5px] text-black leading-[1.8]">
//             An integrated framework of management oversight, faculty excellence,
//             and purpose-built infrastructure sustaining quality across every
//             institution, ensuring continuous assessment, teacher development,
//             institutional monitoring, and transparent processes.
//           </p>
//         </div>

//         {/* Cards */}
//         <div className="overflow-hidden w-[540px]">
//           <div className="flex gap-[18px] overflow-x-auto scroll-smooth snap-x snap-mandatory pb-[20px] scrollbar-hide">
//             {/* Card 1 */}
//             <div className="rounded-[22px] bg-[#ae1431] p-[34px] flex flex-col justify-between h-[220px] w-[320px] flex-shrink-0 snap-start">
//               <span className="text-[20px] text-[#bfbfbf]">/01</span>

//               <span className="text-[26px] font-medium text-white leading-[1.2] flex justify-end">
//                 Strategic
//                 <br />
//                 Leadership
//               </span>
//             </div>

//             {/* Card 2 */}
//             <div className="rounded-[22px] bg-white border border-[#e2e2e2] p-[34px] flex flex-col justify-between h-[220px] w-[320px] flex-shrink-0 snap-start">
//               <span className="text-[20px] text-[#999]">/02</span>

//               <span className="text-[26px] font-medium text-[#111] leading-[1.2] flex justify-end">
//                 Structured
//                 <br />
//                 Academics
//               </span>
//             </div>

//             {/* Card 3 */}
//             <div className="rounded-[22px] bg-white border border-[#e2e2e2] p-[34px] flex flex-col justify-between h-[220px] w-[320px] flex-shrink-0 snap-start">
//               <span className="text-[20px] text-[#999]">/03</span>

//               <span className="text-[26px] font-medium text-[#111] leading-[1.2] flex justify-end">
//                 Operational
//                 <br />
//                 Excellence
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Button */}
//       <div className="flex justify-center mt-[70px]">
//         <button
//           className=" text-[#111] text-[12px] font-[500] tracking-[0.16em] uppercase px-[36px] py-[14px] border border-[#cfcfcf] rounded-[10px]
//     transition-all
//     duration-300
//     ease-out
//  hover:bg-black hover:text-white hover:border-black" >
//           EXPLORE OUR SYSTEMS & STANDARDS
//         </button>
//       </div>
//     </section>
//   );
// }



export default function SystemsSection() {
  return (
    <section className="bg-[#f5efe8] py-[90px] overflow-hidden">

      {/* Tabs */}
      <div className="flex justify-center mb-[70px] px-[20px]">

        <div className="
        flex gap-[120px]

        border-b-[2px] border-[#e5e5e5]

        max-[900px]:
        gap-[14px]
        border-0
        overflow-x-auto
        scrollbar-hide
        ">

          {[
            "Leadership and Management Structure",
            "Infrastructure and Operational Excellence",
            "Institutional Systems & Leadership"
          ].map((item,i)=>(
            
            <div
              key={i}

              className={`
              pb-[18px]

              text-[18px]

              font-medium

              tracking-[0.12em]

              uppercase

              text-center

              whitespace-nowrap

              max-[900px]:
              text-[12px]
              px-[16px]
              py-[10px]
              rounded-full
              border

              ${i===2
                ? "text-[#ae1431] border-[#ae1431] bg-white"
                : "text-[#777] border-[#ddd] bg-white"}
              `}
            >

              {item}

            </div>

          ))}

        </div>

      </div>



      {/* Content */}
      <div className="
      flex

      items-start

      gap-[80px]

      pl-[325px]
      pr-[80px]

      max-[1280px]:pl-[160px]

      max-[900px]:
      flex-col
      pl-[20px]
      pr-[20px]
      gap-[35px]
      ">


        {/* text */}
        <div className="max-w-[420px]">

          <h2 className="text-[42px] font-black text-[#111] leading-[1.1] mb-[24px]

          max-[900px]:
          text-[28px]
          font-semibold">

            Systems That
            <br />
            Sustain Excellence

          </h2>

          <p className="text-[13.5px] text-black leading-[1.8]

          max-[900px]:
          text-[14px]">

            An integrated framework of management oversight, faculty excellence,
            and purpose-built infrastructure sustaining quality across every
            institution.

          </p>

        </div>



        {/* cards */}
        <div className="
        overflow-hidden

        w-[540px]

        max-[900px]:
        w-full
        ">

          <div className="
          flex

          gap-[18px]

          overflow-x-auto

          scroll-smooth

          snap-x snap-mandatory

          pb-[20px]

          scrollbar-hide

          max-[900px]:
          gap-[14px]
          ">

            {[
              {
                n:"01",
                t:"Strategic Leadership",
                primary:true
              },
              {
                n:"02",
                t:"Structured Academics"
              },
              {
                n:"03",
                t:"Operational Excellence"
              }
            ].map((card,i)=>(
              
              <div
                key={i}

                className={`
                rounded-[22px]

                p-[34px]

                flex

                flex-col

                justify-between

                flex-shrink-0

                snap-start

                h-[220px]

                w-[320px]

                max-[900px]:
                w-[260px]
                h-[190px]
                p-[24px]

                ${card.primary
                  ? "bg-[#ae1431]"
                  : "bg-white border border-[#e2e2e2]"}
                `}
              >

                <span
                  className={`
                  text-[18px]

                  ${card.primary
                    ? "text-[#bfbfbf]"
                    : "text-[#999]"}
                  `}
                >

                  /{card.n}

                </span>



                <span
                  className={`
                  text-[26px]

                  font-medium

                  leading-[1.2]

                  flex

                  justify-end

                  max-[900px]:
                  text-[20px]

                  ${card.primary
                    ? "text-white"
                    : "text-[#111]"}
                  `}
                >

                  {card.t.split(" ").map((w,i)=>(
                    <span key={i}>
                      {w}
                      <br/>
                    </span>
                  ))}

                </span>

              </div>

            ))}

          </div>

        </div>

      </div>



      {/* button */}
      <div className="
      flex justify-center

      mt-[70px]

      px-[20px]
      ">

        <button
          className="

          text-[#111]

          text-[12px]

          font-[500]

          tracking-[0.16em]

          uppercase

          px-[36px]

          py-[14px]

          border border-[#cfcfcf]

          rounded-[10px]

          transition-all duration-300

          hover:bg-black
          hover:text-white
          hover:border-black

          max-[900px]:
          w-full
          py-[16px]
          "
        >

          EXPLORE OUR SYSTEMS & STANDARDS

        </button>

      </div>

    </section>
  )
}