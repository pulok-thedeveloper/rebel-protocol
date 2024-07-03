import { useEffect, useState } from "react";

const Why = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("why.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  return (
    <div id="why" className="py-20 w-4/5 mx-auto">
      <h2 className="text-center text-6xl font-bold mb-20">
        <span className="text-rebel_primary">Why</span>{" "}
        <span className="uppercase text-rebel_secondary">Rebel?</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-10">
        {data?.map((item, i) => (
          <div
            key={i}
            className="bg-rebel_fg/40 flex flex-col gap-5 p-10 cursor-pointer rounded-2xl border border-rebel_border_color"
          >
            <div>
              <img className="w-20" src={item.image} />
            </div>
            <h3 className="text-2xl font-semibold text-rebel_primary">
              {item.title}
            </h3>
            <p className="leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Why;
