import { facultySystems, modelPillars } from "../../../constants/homeData";

export default function ModelSection() {
  return (
    <section
      className="
        bg-[#ae1431]
        py-[140px]

        relative
        overflow-hidden
      "
      id="model"
    >
      {/* triangle background */}
      <div
        className="
          absolute

          top-[40px]
          left-1/2
          -translate-x-1/2

          w-[420px]
          h-[320px]

          bg-[#f5efe8]

          opacity-[0.75]
        "
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />

      <div className="max-w-[1180px] mx-auto px-[24px] relative">
        {/* heading block */}
        <div className="max-w-[640px] ml-auto translate-x-[120px] -translate-y-[40px]">

          <h2
            className="
              mt-[18px]

              text-[52px]
              leading-[1.05]

              font-[700]

              tracking-[-0.02em]

              text-#f5efe8
            "
          >
            The ERAM
            <br />
            Educational Model
          </h2>

          <p
            className="
              mt-[18px]

              text-[16px]
              leading-[1.7]

              text-black

              max-w-[520px]
            "
          >
            Our academic framework combines a rigorous curriculum and a
            disciplined structure that supports every learner academically,
            culturally, and socially.
          </p>
        </div>

        {/* pillars container */}
        <div
          className="
            mt-[70px]

            bg-white

            rounded-[28px]

            px-[60px]
            py-[46px]

            grid
            grid-cols-4

            gap-[40px]

            max-[900px]:grid-cols-2
            max-[560px]:grid-cols-1
          "
        >
          {modelPillars.map((item, i) => (
            <div
              key={i}
              className="
                text-center
              "
            >
              <div
                className="
                  h-[72px]

                  flex

                  items-center
                  justify-center

                  mb-[16px]
                "
              >
                <img
                  src={item.icon}
                  className="
                    h-[46px]

                    opacity-[0.9]
                  "
                />
              </div>

              <p
                className="
                  text-[17px]

                  leading-[1.4]

                  text-[#222]

                  font-[500]
                "
              >
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* academic systems */}
        <div
          className="
            mt-[90px]
          "
        >
         <h3
  className="
    text-center
    text-[25px]

    tracking-[0.12em]

    font-[400]

    text-black
  "
>
  ACADEMIC SYSTEMS & FACULTY DEVELOPMENT
</h3>

          <div
  className="
    mt-[70px]

    grid
    grid-cols-4

    gap-[60px]

    max-[900px]:grid-cols-2
    max-[560px]:grid-cols-1
  "
>

  {facultySystems.map((item, i) => (

    <div
      key={i}

      className="
        relative

        pl-[26px]
      "
    >

      {/* divider line */}
      <span
        className="
          absolute

          left-0
          top-[6px]

          h-[225px]

          w-[2px]

          bg-[#bdbdbd]
        "
      />


      {/* number */}
      <div
        className="
          text-[25px]

          tracking-[0.16em]

          font-[500]

          text-[#111]
        "
      >
        /0{i+1}
      </div>



      {/* text */}
<p
  className="
    mt-[100px]
    text-[26px]
    leading-[1.15]
    text-[#222]
  "
  dangerouslySetInnerHTML={{ __html: item }}
/>


    </div>

  ))}

</div>
        </div>
      </div>
    </section>
  );
}
