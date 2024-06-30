import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const PrivateSale = () => {
  return (
    <div className="h-[80vh] relative grid place-items-center -z-10">
      <img
        className="w-full h-full absolute object-cover"
        src="https://cdn.prod.website-files.com/6543866195b24e14b526bfc0/66578da1e5453e085ee0bc8b_header-bg-p-2000.jpg"
      />
      <img
        className="absolute"
        src="https://cdn.prod.website-files.com/6543866195b24e14b526bfc0/66578da09d1d3654d1f1b152_gradient-blurs.svg"
      />
      <div
        className="w-full h-40 absolute bottom-0 left-0 z-10"
        style={{
          background: "linear-gradient(to top, #101319, transparent)",
        }}
      ></div>
      <div className="relative text-center">
        <h2 className="text-6xl font-extrabold leading-normal mb-5">
          REBEL Private Sale <br /> Will Open Soon
        </h2>
        <div className="flex justify-center">
          <Link
            to=""
            className="flex items-center gap-2 px-5 py-3 bg-white/50 rounded-xl text-rebel_bg font-semibold"
          >
            Register your interest <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivateSale;
