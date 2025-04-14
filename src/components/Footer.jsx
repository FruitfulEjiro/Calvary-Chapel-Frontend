import React from "react";
import { Link } from "react-router-dom";

// Icons
import { FaFacebook, FaPlay, FaPhone, FaLocationArrow } from "react-icons/fa";

// Svgs
import logo from "../assets/svg/footer-logo.svg";
import location from "../assets/svg/location.svg";

const Footer = () => {
   return (
      <>
         <footer className="footer">
            <div className="footer-container container-xlg py-3 d-flex flex-column flex-lg-row justify-content-center align-items-center">
               <Link
                  to="#"
                  className="footer-logo d-flex flex-row align-items-center justify-content-center my-2 mx-lg-2 text-white"
               >
                  <img src={logo} alt="" className="footer-logo-icon me-2" />
                  Calvary Chapel
               </Link>
               <p className="address d-flex flex-row align-items-center justify-content-center m-0 mx-lg-2 text-white my-2">
                  <FaLocationArrow className="me-2" />
                  Takamaantie 15 20720 Turku
               </p>
               <p className="footer-contact d-flex flex-row align-items-center justify-content-center m-0 mx-lg-2 text-white my-2">
                  <FaPhone className="me-2" />
                  +358 987 789 23
               </p>
               <div className="footer-socials my-2 mx-lg-2">
                  <FaFacebook className="facebook me-1" />
                  <FaPlay className="video ms-1" />
               </div>
               <p className="copyright m-0 mx-lg-2 text-white my-2">&copy;2023 | Calvary Chapel of Turku</p>
            </div>
         </footer>
      </>
   );
};

export default Footer;
