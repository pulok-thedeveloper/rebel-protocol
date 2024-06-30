import { FaMedium } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="grid place-items-center gap-12 py-10 text-center">
      <div>
        <h3 className="text-2xl text-rebel_secondary mb-5 font-semibold">
          Connect, Follow & Chat with us
        </h3>
        <div className="flex text-3xl gap-10">
          <Link
            to=""
            className="cursor-pointer transition-all duration-300 hover:text-rebel_primary"
          >
            <FaMedium />
          </Link>
          <Link
            to=""
            className="cursor-pointer transition-all duration-300 hover:text-rebel_primary"
          >
            <FaTelegramPlane />
          </Link>
          <Link
            to=""
            className="cursor-pointer transition-all duration-300 hover:text-rebel_primary"
          >
            <FaDiscord />
          </Link>
          <Link
            to=""
            className="cursor-pointer transition-all duration-300 hover:text-rebel_primary"
          >
            <FaXTwitter />
          </Link>
          <Link
            to=""
            className="cursor-pointer transition-all duration-300 hover:text-rebel_primary"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to=""
            className="cursor-pointer transition-all duration-300 hover:text-rebel_primary"
          >
            <SiLinktree />
          </Link>
        </div>
      </div>
      <form className="relative">
        <input className="px-5 py-4 pr-40 rounded-md outline-0 border-0 text-rebel_bg" type="email" placeholder="Enter your email address" />
        <input type="submit" value="Subscribe" className="bg-rebel_secondary text-rebel_bg text-lg font-semibold leading-none px-5 py-3 rounded-lg absolute top-1/2 -translate-y-1/2 right-2 cursor-pointer"/>
      </form>
      <div>
        <h4 className="text-lg text-rebel_secondary">Contact</h4>
        <a href="mailto:chat@rebel.com" className="text-2xl underline underline-offset-8">chat@rebel.com</a>
      </div>
      <div className="flex gap-10">
        <p>
          <span>&copy; REBEL. ALL RIGHTS RESERVED</span>
        </p>
        <Link to="" className="uppercase underline underline-offset-4">
          Legal Disclaimer
        </Link>
        <Link to="" className="uppercase underline underline-offset-4">
          Privacy policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
