import { Link } from "react-router-dom";
import logo from "/src/assets/logo_alt.png";
import { FaArrowRightLong } from "react-icons/fa6";
const Navbar = () => {
  return (
    <div className="fixed h-28 w-full flex justify-center bg-rebel_bg/25 backdrop-blur-lg z-100">
      <div className="w-full flex justify-between items-center px-20">
        <div>
          <Link to="/">
            <img className="h-16" src={logo} />
          </Link>
        </div>
        <div>
          <ul className="flex gap-10">
            <li>
              <a className="uppercase tracking-wider" href="#why">
                Why
              </a>
            </li>
            <li>
              <a className="uppercase tracking-wider" href="#how">
                How
              </a>
            </li>
            <li>
              <a className="uppercase tracking-wider" href="#roadmap">
                Our Roadmap
              </a>
            </li>
            <li>
              <a className="uppercase tracking-wider" href="">
                Whitepaper
              </a>
            </li>
          </ul>
        </div>
        <div>
          <Link
            className="px-5 py-2 rounded-md bg-rebel_primary text-rebel_bg font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-rebel_secondary"
            to=""
          >
            Go to Docs
            <FaArrowRightLong />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
