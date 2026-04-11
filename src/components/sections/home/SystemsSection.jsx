export default function SystemsSection() {
  return (
    <section className="bg-#f5efe8 py-[90px] overflow-hidden">
      {/* Tabs */}
      <div className="flex justify-center mb-[70px]">
        <div className="flex gap-[120px] border-b-[2px] border-[#e5e5e5]">
          <div className="pb-[18px] text-[18px] font-medium tracking-[0.12em] uppercase text-[#9a9a9a] border-b-[2px] border-transparent text-center">
            Leadership and
            <br />
            Management Structure
          </div>

          <div className="pb-[18px] text-[18px] font-medium tracking-[0.12em] uppercase text-[#9a9a9a] border-b-[2px] border-transparent text-center">
            Infrastructure and
            <br />
            Operational Excellence
          </div>

          <div className="pb-[18px] text-[18px] font-medium tracking-[0.12em] uppercase text-[#111] border-b-[3px] border-[#111] text-center">
            Institutional
            <br />
            Systems & Leadership
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex items-start gap-[80px] pl-[325px] pr-[80px]">
        {/* Left */}
        <div className="max-w-[420px]">
          <h2 className="text-[42px] font-black text-[#111] leading-[1.1] mb-[24px]">
            Systems That
            <br />
            Sustain Excellence
          </h2>

          <p className="text-[13.5px] text-black leading-[1.8]">
            An integrated framework of management oversight, faculty excellence,
            and purpose-built infrastructure sustaining quality across every
            institution, ensuring continuous assessment, teacher development,
            institutional monitoring, and transparent processes.
          </p>
        </div>

        {/* Cards */}
        <div className="overflow-hidden w-[540px]">
          <div className="flex gap-[18px] overflow-x-auto scroll-smooth snap-x snap-mandatory pb-[20px] scrollbar-hide">
            {/* Card 1 */}
            <div className="rounded-[22px] bg-black p-[34px] flex flex-col justify-between h-[220px] w-[320px] flex-shrink-0 snap-start">
              <span className="text-[20px] text-[#bfbfbf]">/01</span>

              <span className="text-[26px] font-medium text-white leading-[1.2] flex justify-end">
                Strategic
                <br />
                Leadership
              </span>
            </div>

            {/* Card 2 */}
            <div className="rounded-[22px] bg-white border border-[#e2e2e2] p-[34px] flex flex-col justify-between h-[220px] w-[320px] flex-shrink-0 snap-start">
              <span className="text-[20px] text-[#999]">/02</span>

              <span className="text-[26px] font-medium text-[#111] leading-[1.2] flex justify-end">
                Structured
                <br />
                Academics
              </span>
            </div>

            {/* Card 3 */}
            <div className="rounded-[22px] bg-white border border-[#e2e2e2] p-[34px] flex flex-col justify-between h-[220px] w-[320px] flex-shrink-0 snap-start">
              <span className="text-[20px] text-[#999]">/03</span>

              <span className="text-[26px] font-medium text-[#111] leading-[1.2] flex justify-end">
                Operational
                <br />
                Excellence
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-[70px]">
        <button
          className=" text-[#111] text-[12px] font-[500] tracking-[0.16em] uppercase px-[36px] py-[14px] border border-[#cfcfcf] rounded-[10px]
    transition-all
    duration-300
    ease-out
 hover:bg-black hover:text-white hover:border-black" >
          EXPLORE OUR SYSTEMS & STANDARDS
        </button>
      </div>
    </section>
  );
}
