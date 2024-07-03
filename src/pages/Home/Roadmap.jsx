const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="w-4/5 mx-auto py-20 relative min-h-screen -z-10"
    >
      <h2 className=" pb-20 text-center text-6xl font-bold bg-rebel_bg">
        <span className="text-rebel_primary">Our</span>{" "}
        <span className="uppercase text-rebel_secondary">Roadmap</span>
      </h2>
      <div className="stages grid grid-cols-4">
        <div className="item flex flex-col items-center">
          <div
            className="progress relative w-11 h-11 rounded-full"
            style={{
              background:
                "linear-gradient(to right, #E209D4, #FFA9F9)",
            }}
          ></div>
          <h3></h3>
          <div></div>
        </div>
        <div className="item flex flex-col items-center">
          <div
            className="progress relative w-11 h-11 rounded-full"
            style={{
              background:
                "linear-gradient(to right, #E209D4, #FFA9F9)",
            }}
          ></div>
          <h3></h3>
          <div></div>
        </div>
        <div className="item flex flex-col items-center">
          <div
            className="progress relative w-11 h-11 rounded-full"
            style={{
              background:
                "linear-gradient(to right, #E209D4, #FFA9F9)",
            }}
          ></div>
          <h3></h3>
          <div></div>
        </div>
        <div className="item flex flex-col items-center">
          <div
            className="progress relative w-11 h-11 rounded-full"
            style={{
              background:
                "linear-gradient(to right, #E209D4, #FFA9F9)",
            }}
          ></div>
          <h3></h3>
          <div></div>
        </div>
      </div>
      {/* <div
        className="w-full h-80 sticky top-[130px] left-0 -z-20"
        style={{
          background: "linear-gradient(to bottom, #101319, rgba(16,19,25,0.3))",
        }}
      ></div>
      <div className="top-0 left-0 w-full absolute -z-30 overflow-hidden">
        <img
          className="w-4/5 mx-auto "
          src="https://cdn.prod.website-files.com/6543866195b24e14b526bfc0/6659d5a36176683e87910cfa_roadmap__desktop.svg"
        />
      </div> */}
    </div>
  );
};

export default Roadmap;
