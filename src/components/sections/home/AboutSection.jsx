// import { shell } from "../../../constants/homeStyles"

// export default function AboutSection() {
//   return (
//     <section
//       id="about"
//       className="bg-[#ae1431] py-[100px]"
//     >
//       <div className={shell}>
        
//         {/* Top Grid: Label + Content */}
//         <div className="grid grid-cols-[300px_1fr] gap-x-[100px] max-[1100px]:grid-cols-1 max-[1100px]:gap-y-[40px]">
          
//           {/* Left: ABOUT US label */}
//           <div className="pl-[100px]">
//             <span className="text-[18px] tracking-[0.15em] uppercase text-[#f5efe8] font-medium">
//               ABOUT US
//             </span>
//           </div>

//           {/* Right: Main content */}
//           <div className="pl-[300px]">
//             <h2 className="text-[48px] leading-[1.15] font-semibold text-[#f5efe8] max-w-[600px]">
//               An Institutional
//               <br />
//               Movement of Purpose
//             </h2>

//             <p className="mt-[24px] text-[14.5px] leading-[1.75] text-[#f5efe8] max-w-[520px] font-normal">
//               ERAM Education was established to build disciplined, value-based
//               institutions that expand access to quality learning and reach
//               communities that need it most. Founded under the CSR vision of the
//               Eram Group of Companies, it upholds structured academic standards
//               while serving communities with integrity.
//             </p>
//           </div>
//         </div>

//         {/* Bottom: Three Cards */}
//          <div className="mt-[80px]">
          
//           {/* Top Row: 3 Cards */}
//           <div className="grid grid-cols-3 gap-[24px] max-[900px]:grid-cols-1">
            
//             {/* Text (No Card) */}
//           <div className="flex items-end min-h-[380px] pb-[115px] pl-[140px]">
//   <p className="text-[32px] leading-[1.25] font-medium text-[#f5efe8]">
//     Committed
//     <br />
//     to Access.
//     <br />
//     Dedicated to
//     <br />
//     Excellence
//   </p>
// </div>
 
//             {/* Image Card 1 */}
//             <div className="rounded-[20px] bg-[#d8d8d8] min-h-[420px] flex items-center justify-center">
//               <svg className="w-[80px] h-[80px] text-[#b0b0b0]" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
//               </svg>
//             </div>
 
//             {/* Image Card 2 */}
//             <div className="rounded-[20px] bg-[#d8d8d8] min-h-[420px] flex items-center justify-center">
//               <svg className="w-[80px] h-[80px] text-[#b0b0b0]" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
//               </svg>
//             </div>
//           </div>
 

// {/* Bottom Row: 2 Cards */}
// <div className="grid grid-cols-3 gap-[24px] mt-[24px] max-[900px]:grid-cols-1">

//   {/* Image Card 3 */}
//   <div className="rounded-[24px] bg-[#d8d8d8] min-h-[450px] flex items-center justify-center">
//     <svg className="w-[60px] h-[60px] text-[#b0b0b0]" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
//     </svg>
//   </div>

//   {/* Image Card 4 */}
//   <div className="rounded-[24px] bg-[#d8d8d8] min-h-[450px] flex items-center justify-center">
//     <svg className="w-[60px] h-[60px] text-[#b0b0b0]" fill="currentColor" viewBox="0 0 24 24">
//       <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
//     </svg>
//   </div>

// </div>
//         </div>
 

//       </div>
//     </section>
//   )
// }

import { shell } from "../../../constants/homeStyles"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#ae1431] py-[100px]"
    >
      <div className={shell}>

        {/* Top Grid */}
        <div className="grid grid-cols-[300px_1fr] gap-x-[100px]

        max-[1100px]:grid-cols-1
        max-[1100px]:gap-y-[40px]">

          {/* label */}
          <div className="max-[1100px]:pl-0 pl-[100px]">
            <span className="text-[18px] tracking-[0.15em] uppercase text-[#f5efe8] font-medium">
              ABOUT US
            </span>
          </div>

          {/* content */}
          <div className="pl-[300px]

          max-[1280px]:pl-[160px]
          max-[1100px]:pl-0">

            <h2 className="text-[48px] leading-[1.15] font-semibold text-[#f5efe8]

            max-w-[600px]

            max-[640px]:text-[34px]">

              An Institutional
              <br />
              Movement of Purpose

            </h2>

            <p className="mt-[24px] text-[14.5px] leading-[1.75] text-[#f5efe8]

            max-w-[520px]">

              ERAM Education was established to build disciplined, value-based
              institutions that expand access to quality learning and reach
              communities that need it most. Founded under the CSR vision of the
              Eram Group of Companies, it upholds structured academic standards
              while serving communities with integrity.

            </p>

          </div>

        </div>



        {/* cards */}
        <div className="mt-[80px]">

          {/* row 1 */}
          <div className="grid grid-cols-3 gap-[24px]

          max-[1100px]:grid-cols-2
          max-[640px]:grid-cols-1">

            {/* text block */}
            <div className="flex items-end

            min-h-[380px]

            pb-[115px]

            pl-[140px]

            max-[1280px]:pl-[60px]
            max-[1100px]:pl-0
            max-[1100px]:pb-[40px]">

              <p className="text-[32px] leading-[1.25] font-medium text-[#f5efe8]

              max-[640px]:text-[26px]">

                Committed
                <br />
                to Access.
                <br />
                Dedicated to
                <br />
                Excellence

              </p>

            </div>



            {/* card */}
            <div className="rounded-[20px] bg-[#d8d8d8]

            min-h-[420px]">

            </div>



            {/* card */}
            <div className="rounded-[20px] bg-[#d8d8d8]

            min-h-[420px]">

            </div>

          </div>



          {/* row 2 */}
          <div className="grid grid-cols-3 gap-[24px] mt-[24px]

          max-[1100px]:grid-cols-2
          max-[640px]:grid-cols-1">

            <div className="rounded-[24px] bg-[#d8d8d8]

            min-h-[450px]">

            </div>



            <div className="rounded-[24px] bg-[#d8d8d8]

            min-h-[450px]">

            </div>

          </div>

        </div>



      </div>
    </section>
  )
}