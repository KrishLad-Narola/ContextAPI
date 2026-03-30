
import footerContact from "../API/FooterAppi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="bg-[#D97A2B] text-white mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-6 max-w-7xl mx-auto gap-6">
        {footerContact.map((curData, index) => {
          const { icon, title, details } = curData;
          return (
            <div
              className="flex items-center gap-3 text-center md:text-left"
              key={index}
            >
              <div className="text-2xl">{footerIcon[icon]}</div>
              <div>
                <p className="font-semibold">{title}</p>
                <p className="text-sm">{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      
      <div className="border-t border-white/30 py-4 px-6 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © 2026 All Rights Reserved |{" "}
          <NavLink to="/" className="underline hover:text-black">
            WebWithKrish
          </NavLink>
        </p>

        <ul className="flex gap-4 text-sm">
          <li>
            <NavLink to="/" className="hover:text-black">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/" className="hover:text-black">
            SocialMedia
            </NavLink>
          </li>
          <li>
            <a href="https://github.com/KrishLad-Narola" className="hover:text-black">
              Source Code
            </a>
          </li>
          <li>
            <NavLink to="/contact" className="hover:text-black">
              Contact Us.
            </NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
