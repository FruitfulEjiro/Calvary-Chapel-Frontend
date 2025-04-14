import React, { useRef } from "react";
import { Link } from "react-router-dom";

// Icons
import { FaBars, FaArrowLeft } from "react-icons/fa";
// Svgs
import logo from "../assets/svg/logo.svg";
import ministry from "../assets/svg/ministry.svg";
import men from "../assets/svg/men.svg";
import women from "../assets/svg/women.svg";
import youth from "../assets/svg/youth.svg";
import children from "../assets/svg/children.svg";
import resources from "../assets/svg/resources.svg";
import verse from "../assets/svg/verse.svg";
import wednesday from "../assets/svg/wednesday.svg";
import sunday from "../assets/svg/sunday.svg";
import guestspeaker from "../assets/svg/guestspeaker.svg";
import character from "../assets/svg/character.svg";
import topical from "../assets/svg/topical.svg";
import conferences from "../assets/svg/conferences.svg";
import schedule from "../assets/svg/schedule.svg";
import about from "../assets/svg/about.svg";
import history from "../assets/svg/history.svg";
import statement from "../assets/svg/statement.svg";
import leadership from "../assets/svg/leadership.svg";
import contact from "../assets/svg/contact.svg";

const Navigation = () => {
   const navRef = useRef();

   const showNavbar = () => {
      navRef.current.style.transform = "translateX(0%)";
   };
   const hideNavbar = () => {
      navRef.current.style.transform = "translateX(-100%)";
   };
   const showDropDown = () => {
      navRef.current.style.height = "16rem";
   };
   const hideDropDown = () => {
      navRef.current.style.height = "0rem";
   };

   return (
      <>
         <header className="header container-fluid fixed-top bg-white p-0 px-lg-4">
            <nav className="nav-bar container-xxl position-relative h-100 d-flex flex-row align-items-center justify-content-start justify-content-lg-between">
               <FaBars className="hamburger text-primary me-4 d-lg-none" onClick={() => showNavbar()} />
               <div className="logo z-7">
                  <Link to="/" className="text-primary d-flex flex-row align-items-center justify-content-center">
                     <img src={logo} alt="" className="logo-icon me-2" />
                     <span className="church-name">Calvary Chapel Turku</span>
                  </Link>
               </div>
               <ul
                  ref={navRef}
                  className="nav-menu p-0 ps-3 m-0 d-flex flex-column flex-lg-row align-items-start align-items-lg-center justify-content-start justify-content-lg-end z-7"
               >
                  <FaArrowLeft className="x-mark position-relative m-0 p-0 d-lg-none" onClick={() => hideNavbar()} />
                  <li className="nav-items mx-2 my-3 d-flex flex-row align-items-center justify-content-cnter d-lg-none">
                     <Link to="/" className="item item0">
                        Home
                     </Link>
                  </li>
                  <li
                     className="nav-items ministry mx-2 mx-lg-2 my-3 d-flex flex-row align-items-center justify-content-cnter"
                     onMouseOver={() => showDropDown()}
                     onMouseOut={() => hideDropDown()}
                  >
                     <Link to="/ministry" className="item item1">
                        <img src={ministry} alt="" className="mb-1 me-1" />
                        Ministry<i className="fa-solid fa-caret-right caret ms-1 d-none d-lg-inline-block"></i>
                     </Link>
                     <ul ref={navRef} className="item-dropdown ministry-dropdown d-none d-lg-block m-0 p-0 ps-3">
                        <li className="sub-items my-lg-4">
                           <Link to="/ministry?ministry=men">
                              <img src={men} alt="" className="mb-1 me-1" />
                              Men's Ministry
                           </Link>
                        </li>
                        <li className="sub-items my-lg-4">
                           <Link to="/ministry?ministry=women">
                              <img src={women} alt="" className="mb-1 me-1" />
                              Women's Ministry
                           </Link>
                        </li>
                        <li className="sub-items my-lg-4">
                           <Link to="/ministry?ministry=youth">
                              <img src={youth} alt="" className="mb-1 me-1" />
                              Youth's Ministry
                           </Link>
                        </li>
                        <li className="sub-items my-lg-4">
                           <Link to="/ministry?ministry=children">
                              <img src={children} alt="" className="mb-1 me-1" />
                              Children's Ministry
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li className="nav-items resources mx-2 mx-lg-2 my-3 d-flex flex-row align-items-center justify-content-cnter">
                     <Link to="/resources" className="item item2">
                        <img src={resources} alt="" className="mb-1 me-1" />
                        Resources<i className="fa-solid fa-caret-right caret ms-1 d-none d-lg-inline-block"></i>
                     </Link>
                     <ul className="item-dropdown resources-dropdown d-none d-lg-block m-0 p-0 ps-3">
                        <li className="sub-items my-lg-4">
                           <Link to="/resources?resources=Verse">
                              <img src={verse} alt="" className="mb-1 me-1" />
                              Verse By Verse
                           </Link>
                        </li>
                        <li className="sub-items my-lg-4">
                           <Link to="/resources?resources=Wednesday-Services">
                              <img src={wednesday} alt="" className="mb-1 me-1" />
                              Wednesday Services
                           </Link>
                        </li>
                        <li className="sub-items my-lg-4">
                           <Link to="/resources?resources=Sunday-Services">
                              <img src={sunday} alt="" className="mb-1 me-1" />
                              Sunday Services
                           </Link>
                        </li>
                        <li className="sub-items my-lg-4">
                           <Link to="/resources?resources=Guest-Speakers">
                              <img src={guestspeaker} alt="" className="mb-1 me-1" />
                              Guest Speakers
                           </Link>
                        </li>
                        <li className="sub-items my-lg-4">
                           <Link to="/resources?resources=Character-Studies">
                              <img src={character} alt="" className="mb-1 me-1" />
                              Character Studies
                           </Link>
                        </li>
                        <li className="sub-items my-lg-4">
                           <Link to="/resources?resources=Topical-Studies">
                              <img src={topical} alt="" className="mb-1 me-1" />
                              Topical Studies
                           </Link>
                        </li>
                        <li className="sub-items my-lg-4">
                           <Link to="/resources?resources=Conferences">
                              <img src={conferences} alt="" className="mb-1 me-1" />
                              Conferences
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li className="nav-items schedule mx-2 mx-lg-2 my-3 d-flex flex-row align-items-center justify-content-cnter">
                     <Link to="/schedule" className="item item3">
                        <img src={schedule} alt="" className="mb-1 me-1" />
                        Schedule
                     </Link>
                  </li>
                  <li className="nav-items about mx-2 mx-lg-2 my-3 d-flex flex-row align-items-center justify-content-cnter">
                     <Link to="/about" className="item item4">
                        <img src={about} alt="" className="mb-1 me-1" />
                        About<i className="fa-solid fa-caret-right caret ms-1 d-none d-lg-inline-block"></i>
                     </Link>
                     <ul className="item-dropdown about-dropdown d-none d-lg-block m-0 p-0 ps-3">
                        <li className="sub-items my-lg-4">
                           <Link to="/about?view=about">
                              <img src={history} alt="" className="mb-1 me-1" />
                              History of CCT
                           </Link>
                        </li>
                        <li className="sub-items my-lg-4">
                           <Link to="/about?view=statement">
                              <img src={statement} alt="" className="mb-1 me-1" />
                              Statement of Faith
                           </Link>
                        </li>
                        <li className="sub-items my-lg-4">
                           <Link to="/about?view=leadership">
                              <img src={leadership} alt="" className="mb-1 me-1" />
                              Leadership
                           </Link>
                        </li>
                     </ul>
                  </li>
                  <li className="nav-items contact mx-2 mx-lg-2 my-3 d-flex flex-row align-items-center justify-content-cnter">
                     <Link to="/contact" className="item item5">
                        <img src={contact} alt="" className="mb-1 me-1" />
                        Contact
                     </Link>
                  </li>
               </ul>
            </nav>
         </header>
      </>
   );
};

export default Navigation;
