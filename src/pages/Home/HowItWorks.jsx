import { useState } from "react";
import { useEffect } from "react";

const HowItWorks = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("howItWorks.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  });

  return (
    <div id="how" className=" bg-black relative px-20 overflow-hidden -z-10">
      <div
        className="w-full h-40 absolute top-0 left-0 z-10"
        style={{
          background: "linear-gradient(to bottom, #101319, transparent)",
        }}
      ></div>
      <div
        className="w-full h-40 absolute bottom-0 left-0 z-10"
        style={{
          background: "linear-gradient(to top, #101319, transparent)",
        }}
      ></div>
      <video
        className="absolute w-full h-full object-cover top-0 left-0 lg:-left-[12%]"
        src="https://cdn.prod.website-files.com/6543866195b24e14b526bfc0%2F6659e2e20c9b745552213e60_Comp%203-transcode.webm"
        id="7df782c5-a1d6-c0db-0367-fc1475447eab-video"
        autoPlay="true"
        loop="true"
        muted="true"
        playsInline=""
        data-wf-ignore="true"
        data-object-fit="cover"
      />
      <div className="relative flex lg:justify-end justify-center items-center py-40">
        <div className="lg:w-1/2 grid lg:grid-cols-2 gap-10">
          {data?.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-xl border bg-rebel_bg/50 backdrop-blur-lg relative flex flex-col"
            >
              <h3 className="text-3xl font-semibold capitalize mb-5 text-rebel_secondary">
                {item.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed">{item.description}</p>
              <footer className="flex-grow flex items-end uppercase">
                <p className="border-t pt-5 w-full text-rebel_primary">
                  {item.moto}
                </p>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
