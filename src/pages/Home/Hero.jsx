import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="grid items-center pt-32 pb-20 -z-10">
      <div className="w-4/5 mx-auto lg:flex items-center gap-10">
        <div className="w-3/5">
          <h1 className="text-8xl md:text-9xl font-bold uppercase mb-8 ">
            <span className="text-rebel_primary">Driven meets</span>{" "}
            <span className="text-rebel_secondary">liquidity</span>
          </h1>
          <p className="leading-loose mb-8">
            REBEL delivers Real-World Assets, such as gold and silver, as easily
            tradable tokens with yield-generating potential. We offer a refined
            and highly secure platorm which combines the stability from timeless
            asstets with the efficiency and opportunities that blockchain
            provides.
          </p>
          <div className="flex">
            <Link
              className="px-5 py-3 rounded-md bg-rebel_primary text-rebel_bg font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-rebel_secondary"
              to=""
            >
              Read Whitepaper
              <FaArrowRightLong />
            </Link>
          </div>
        </div>
        <div className="flex-grow -z-10">
          <dotlottie-player
            src="https://lottie.host/1137344b-06b2-4a46-bd2b-1e44aeccdd74/2eyc0RiqZJ.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Hero;
