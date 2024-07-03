const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="w-4/5 mx-auto py-20 relative -z-10"
    >
      <h2 className=" pb-20 text-center text-6xl font-bold bg-rebel_bg">
        <span className="text-rebel_primary">Our</span>{" "}
        <span className="uppercase text-rebel_secondary">Roadmap</span>
      </h2>

      <div className="stages md:grid grid-cols-4 ">
        <div className="item flex flex-col items-center mb-8">
          <div
            className="progress hidden lg:block relative w-11 h-11 rounded-full z-10 mb-5"
            style={{
              background: "linear-gradient(to right, #E209D4, #FFA9F9)",
            }}
          ></div>
          <h3 className="text-2xl font-semibold text-rebel_primary">Phase 1</h3>
          <p>Q3 2024</p>
          <div className="bg-gray-700/30 backdrop-blur-lg mt-5 w-11/12 px-8 py-5 rounded-xl flex-grow">
            <h3 className="text-rebel_secondary mb-2 font-semibold text-center text-lg">Actions</h3>
            <ul className="flex flex-col gap-1">
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>White paper</span></li>
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>Dashbord</span></li>
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>Seed sale</span></li>
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>Presale</span></li>
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>Public sale</span></li>
            </ul>
          </div>
        </div>

        <div className="item flex flex-col items-center mb-8">
          <div
            className="progress hidden lg:block relative w-11 h-11 rounded-full z-10 mb-5"
            style={{
              background: "linear-gradient(to right, #E209D4, #FFA9F9)",
            }}
          ></div>
          <h3 className="text-2xl font-semibold text-rebel_primary">Phase 2</h3>
          <p>Q4 2024</p>
          <div className="bg-gray-700/30 backdrop-blur-lg mt-5 w-11/12 px-8 py-5 rounded-xl flex-grow">
            <h3 className="text-rebel_secondary mb-2 font-semibold text-center text-lg">Actions</h3>
            <ul className="flex flex-col gap-1">
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>Public sale</span></li>
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>TGE $REB</span></li>
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>REBEL PLATFORM</span></li>
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>$REB GOLD</span></li>
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>Phase 1 metaverse & ai</span></li>
            </ul>
          </div>
        </div>

        <div className="item flex flex-col items-center mb-8">
          <div
            className="progress hidden lg:block relative w-11 h-11 rounded-full z-10 mb-5"
            style={{
              background: "linear-gradient(to right, #E209D4, #FFA9F9)",
            }}
          ></div>
          <h3 className="text-2xl font-semibold text-rebel_primary">Phase 3</h3>
          <p>Q1 2025</p>
          <div className="bg-gray-700/30 backdrop-blur-lg mt-5 w-11/12 px-8 py-5 rounded-xl flex-grow">
            <h3 className="text-rebel_secondary mb-2 font-semibold text-center text-lg">Actions</h3>
            <ul className="flex flex-col gap-1">
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>Phase 2 metaverse & ai</span></li>
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>$REB platinum</span></li>
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>$REB silver</span></li>
            </ul>
          </div>
        </div>

        <div className="item flex flex-col items-center mb-8">
          <div
            className="progress hidden lg:block relative w-11 h-11 rounded-full z-10 mb-5"
            style={{
              background: "linear-gradient(to right, #E209D4, #FFA9F9)",
            }}
          ></div>
          <h3 className="text-2xl font-semibold text-rebel_primary">Phase 4</h3>
          <p>Q2 2025</p>
          <div className="bg-gray-700/30 backdrop-blur-lg mt-5 w-11/12 px-8 py-5 rounded-xl flex-grow">
            <h3 className="text-rebel_secondary mb-2 font-semibold text-center text-lg">Actions</h3>
            <ul className="flex flex-col gap-1">
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>Rwa expansion</span></li>
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>Dao implementation</span></li>
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>Sector compounds & multiRWA TOKEN</span></li>
              <li className="flex gap-2 items-baseline"><span className="w-2 h-2 rounded-full" style={{background: 'linear-gradient(to right, #E209D4, #FFA9F9)'}}></span> <span>Phase 3 metaverse & ai</span></li>
            </ul>
          </div>
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
