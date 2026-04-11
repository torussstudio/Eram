
import { useEffect, useRef } from "react"
import gsap from "gsap"

export default function MarqueeText() {

  const ref = useRef(null)

  useEffect(() => {

    gsap.to(ref.current, {
      xPercent: -50,
      duration: 22,
      ease: "linear",
      repeat: -1
    })

  }, [])

  const text = "FIVE INSTITUTIONS. ONE DISCIPLINED ECOSYSTEM OF LEARNING"

  const items = [...Array(8)]

  return (

    <div className="relative left-1/2 right-1/2 w-screen -translate-x-1/2 overflow-hidden border-y-[2px] border-black py-[16px] mb-[70px]">

      <div
        ref={ref}
        className="flex items-center whitespace-nowrap w-max"
      >

        {items.map((_, i) => (

          <div
            key={i}
            className="flex items-center gap-[40px] pr-[40px]"
          >

            <span className="text-[25px] tracking-[0.22em] text-black">
              {text}
            </span>

            <div className="h-[18px] w-[1px] bg-black flex-shrink-0" />

          </div>

        ))}

      </div>

    </div>

  )

}