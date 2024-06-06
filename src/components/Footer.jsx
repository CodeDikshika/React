import React from "react";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillMail,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="ele">
          <AiFillGoogleCircle />
          <a href="#">Google</a>
        </div>
        <div className="ele">
          <AiFillTwitterCircle />
          <a href="#">Twitter</a>
        </div>
        <div className="ele">
         
          <AiFillMail />
          <a href="">Mail</a>
        </div>
        <div className="ele">
          
          <AiFillInstagram />
          <a href="">Instagram</a>
        </div>
      </div>
      <h2 className="head">Copyright <span>&#169;</span>
2024; Designed By Dikshika Bansal</h2>
    </footer>
  );
};

export default Footer;
