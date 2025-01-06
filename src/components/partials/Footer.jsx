import React from "react";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-primary">
      {/* <div className="py-[1.4rem] 1w-full mt-6">
        <h3>Feel free to talk about your projects</h3>
        <p>Lorem ipsum dolor sit amet.</p>
        <button>Contact us</button>
      </div> */}
      <div className="container py-4">
        <div className="flex justify-between items-center bg-light px-5 rounded-full py-1">
          <ul className="flex justify-between gap-3">
            <li>
              <FaFacebook size={20} />
            </li>
            <li>
              <FaTwitter size={20} />
            </li>
            <li>
              <FaInstagram size={20} />
            </li>
            <li>
              <FaYoutube size={20} />
            </li>
            <li>
              <FaEnvelope size={20} />
            </li>
          </ul>
          <div className="">
            <h6>Sitio Silangan, Brgy. Palagaran, Tiaong Quezon 4325</h6>
          </div>

          <div className="">
            <h6>©Creative Design 2024 </h6>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
