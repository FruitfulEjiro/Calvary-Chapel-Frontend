import React from "react";
import { Link } from "react-router-dom";

// Components
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

// Images
import heroImg from "../assets/images/home.png";

// Svg
import history from "../assets/svg/history.svg";
import statement from "../assets/svg/statement.svg";
import leadership from "../assets/svg/leadership.svg";

// Styles
import "../styles/about.css";

const About = () => {
   return (
      <>
         <Navigation />
         <main className="pt-4 pt-xxs-5">
            <section className="about-hero">
               <img src={heroImg} alt="" className="about-hero-img" />
               <div className="overlay"></div>
               <div className="about-hero-container container d-flex flex-row justify-content-center align-items-center">
                  <h1 className="about-hero-text text-white text-center">ABOUT CALVARY CHAPEL TURKU</h1>
               </div>
            </section>

            <section className="about-nav py-3">
               <div className="about-nav-container container overflow-auto">
                  <div className="nav-container w-100 d-flex flex-row justify-content-center gap-5 py-3">
                     <Link to="/about?view=about" className="color text-primary">
                        <div className="history-of-cct text-center rounded-pill text-primary fw-bold">
                           <img src={history} alt="" className="me-2" />
                           History of CCT
                        </div>
                     </Link>

                     <Link to="/about?view=statement" className="color text-primary">
                        <div className="statement text-center rounded-pill text-primary fw-bold">
                           <img src={statement} alt="" className="me-2" />
                           Statement of Faith
                        </div>
                     </Link>

                     <Link to="/about?view=leadership" className="color text-primary">
                        <div className="leadership text-center rounded-pill text-primary fw-bold">
                           <img src={leadership} alt="" className="me-2" />
                           Leadership
                        </div>
                     </Link>
                  </div>
               </div>
            </section>

            <section className="about-container py-3"></section>
         </main>
         <Footer />
      </>
   );
};

export default About;
