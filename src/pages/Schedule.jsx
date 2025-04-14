import React from "react";

// Icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// Components
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

// Images
import heroImg from "../assets/images/home.png";

// Styles
import "../styles/schedule.css";

const Schedule = () => {
   return (
      <>
         <Navigation />
         <main className="pt-4 pt-xxs-5">
            <section className="schedule-hero">
               <img src={heroImg} alt="" className="schedule-hero-img" />
               <div className="overlay"></div>
               <div className="schedule-hero-container container d-flex flex-row justify-content-center align-items-center">
                  <h1 className="schedule-hero-text text-white text-center">OUR SCHEDULE</h1>
               </div>
            </section>

            <section className="schedule-section container d-flex flex-column align-items-center justify-content-start py-5">
               <div className="schedule-container py-3">
                  <div className="calendar d-flex flex-row align-items-center justify-content-center pb-3">
                     <button className="d-flex flex-row align-items-center justify-content-center left-button">
                        <FaArrowLeft />
                     </button>
                     <span className="month fw-bold me-1"></span>
                     <span className="year fw-bold ms-1"></span>
                     <button className="d-flex flex-row align-items-center justify-content-center right-button">
                        <FaArrowRight />
                     </button>
                  </div>
                  <div className="schedule-type d-flex flex-row align-items-center justify-content-center">
                     <p className="upcoming d-flex flex-row align-items-center justify-content-center fw-bold w-100 px-3 py-2 m-0 text-center">
                        Upcoming
                        <br />
                        Services
                     </p>
                     <p className="concluded d-flex flex-row align-items-center justify-content-center fw-bold w-100 px-3 py-2 m-0 text-center">
                        Just
                        <br />
                        Concluded
                     </p>
                  </div>
                  <div className="event p-4">
                     <p className="event-text text-center m-0"></p>
                  </div>
               </div>
            </section>
            {/* <Footer /> */}
         </main>
      </>
   );
};

export default Schedule;