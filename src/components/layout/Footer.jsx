import { shell } from "../../constants/homeStyles"

export default function Footer() {
  return (
    <footer className="pb-12 pt-[10px]">
      <div
        className={`${shell} flex items-center justify-between gap-[26px] border-t border-[rgba(17,17,17,0.16)] pt-7 max-[920px]:flex-col max-[920px]:items-stretch max-[640px]:pt-5`}
      >
        <div>
          <a className="inline-flex items-center gap-[10px]" href="#hero">
            <span className="h-6 w-[7px] rounded-full bg-[#111111]" />
            <span className="font-display text-[1.3rem] font-black tracking-[0.12em] text-[#111111]">
              ERAM
            </span>
          </a>
          <p className="mt-4 max-w-[32rem] text-base leading-[1.75] text-[#616161] max-[640px]:text-[0.92rem]">
            Building disciplined, value-based institutions that expand access to quality learning
            and reach communities that need it most.
          </p>
        </div>

        <div className="flex flex-wrap gap-[18px] max-[640px]:gap-x-[14px] max-[640px]:gap-y-[10px]">
          <a className="text-[0.8rem] font-extrabold uppercase tracking-[0.14em] text-[#616161]" href="#about">
            About
          </a>
          <a
            className="text-[0.8rem] font-extrabold uppercase tracking-[0.14em] text-[#616161]"
            href="#institutions"
          >
            Institutions
          </a>
          <a className="text-[0.8rem] font-extrabold uppercase tracking-[0.14em] text-[#616161]" href="#beyond">
            Student Pathways
          </a>
          <a className="text-[0.8rem] font-extrabold uppercase tracking-[0.14em] text-[#616161]" href="#impact">
            Impact
          </a>
        </div>
      </div>
    </footer>
  )
}
