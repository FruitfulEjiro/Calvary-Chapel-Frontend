import React from "react";
import { Outlet, Link } from "react-router-dom";

// Components
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

// Images
import heroImg from "../assets/images/home.png";

// Svgs
import verse from "../assets/svg/verse.svg";
import wednesday from "../assets/svg/wednesday.svg";
import sunday from "../assets/svg/sunday.svg";
import guestspeaker from "../assets/svg/guestspeaker.svg";
import character from "../assets/svg/character.svg";
import topical from "../assets/svg/topical.svg";
import conferences from "../assets/svg/conferences.svg";

// Styles
import "../styles/resources.css";

const Resources = () => {
   return (
      <>
         <Navigation />
         <main className="pt-4 pt-xxs-5">
            <section className="resources-hero">
               <img src={heroImg} alt="" className="resources-hero-img" />
               <div className="overlay"></div>
               <div className="resources-hero-container container d-flex flex-column justify-content-center align-items-center">
                  <h1 className="resources-hero-text text-white text-center mt-5">OUR RESOURCES</h1>
                  <input
                     className="resources-hero-input mt-3 p-2"
                     type="search"
                     name=""
                     id=""
                     placeholder="Search for Anything"
                  />
               </div>
            </section>

            <section className="resources-nav py-3">
               <div className="resources-nav-container container overflow-auto">
                  <div className="nav-container d-flex flex-row gap-5 py-3">
                     <Link to="/resources/verse" className="color text-primary">
                        <div className="verse-by-verse text-center rounded-pill text-primary fw-bold">
                           <img src={verse} alt="" className="me-2" />
                           Verse by Verse
                        </div>
                     </Link>

                     <Link to="/resources/wednesday-services" className="color text-primary">
                        <div className="wednesday-services text-center rounded-pill text-primary fw-bold">
                           <img src={wednesday} alt="" className="me-2" />
                           Wednesday Services
                        </div>
                     </Link>

                     <Link to="/resources/sunday-services" className="color text-primary">
                        <div className="sunday-services text-center rounded-pill text-primary fw-bold">
                           <img src={sunday} alt="" className="me-2" />
                           Sunday Services
                        </div>
                     </Link>

                     <Link to="/resources/guest-speakers" className="color text-primary">
                        <div className="guest-speakers text-center rounded-pill text-primary fw-bold">
                           <img src={guestspeaker} alt="" className="me-2" />
                           Guest Speakers
                        </div>
                     </Link>

                     <Link to="/resources/character-studies" className="color text-primary">
                        <div className="character-studies text-center rounded-pill text-primary fw-bold">
                           <img src={character} alt="" className="me-2" />
                           Character Studies
                        </div>
                     </Link>

                     <Link to="/resources/topical-studies" className="color text-primary">
                        <div className="topical-studies text-center rounded-pill text-primary fw-bold">
                           <img src={topical} alt="" className="me-2" />
                           Topical Studies
                        </div>
                     </Link>

                     <Link to="/resources/conferences" className="color text-primary">
                        <div className="conferences text-center rounded-pill text-primary fw-bold">
                           <img src={conferences} alt="" className="me-2" />
                           Conferences
                        </div>
                     </Link>
                  </div>
               </div>
            </section>

            <section className="resources container">
               <div className="resources-container d-flex flex-column flex-md-column align-items-center align-items-start justify-content-center gap-3 py-3">
                  <Outlet />
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
};

export default Resources;
