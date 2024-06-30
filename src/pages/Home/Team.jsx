import { useEffect, useState } from "react";

const Team = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("team.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  });
  return (
    <div className="py-20 w-4/5 mx-auto">
      <h2 className="text-center text-6xl font-bold mb-20">
        <span className="text-rebel_primary">Our</span>{" "}
        <span className="uppercase text-rebel_secondary">Team</span>
      </h2>
      <div className="grid grid-cols-3 gap-10">
        {data?.map((item, i) => (
          <div
            key={i}
            className="bg-rebel_fg/70 group flex flex-col gap-5 p-8 cursor-pointer rounded-2xl border border-rebel_border_color/30"
          >
            <div className="h-[400px] rounded-xl overflow-hidden">
              <img
                className="w-full h-full object-cover object-center rounded-xl group-hover:scale-110 transition-all duration-300"
                src={item.image}
              />
            </div>
            <div className="text-center">
              <h3 className="text-2xl">{item.name}</h3>
              <p>{item.designation}</p>
              <p className="mt-5">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
