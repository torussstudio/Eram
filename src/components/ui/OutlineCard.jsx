export default function OutlineCard({ code, title, description, className = '' }) {
  return (
    <article
      className={`flex min-h-[240px] flex-col justify-between rounded-[24px] bg-[rgba(255,255,255,0.76)] p-7 shadow-none ${className}`.trim()}
    >
      <span className="font-display text-[0.76rem] font-extrabold uppercase tracking-[0.18em] text-[#616161]">
        {code}
      </span>
      <div>
        <h3 className="mt-[26px] font-display text-[1.55rem] leading-[1.05] tracking-[-0.04em] uppercase text-[#111111]">
          {title}
        </h3>
        <p className="mt-[18px] text-base leading-[1.75] text-[#616161]">{description}</p>
      </div>
    </article>
  )
}
