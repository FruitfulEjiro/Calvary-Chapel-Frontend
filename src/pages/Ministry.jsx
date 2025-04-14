import React from "react";
import { Outlet, Link } from "react-router-dom";

// Components
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

// Images
import heroImg from "../assets/images/home.png";

// Svgs
import men from "../assets/svg/men.svg";
import women from "../assets/svg/women.svg";
import youth from "../assets/svg/youth.svg";
import children from "../assets/svg/children.svg";

// Styles
import "../styles/ministry.css";

const Ministry = () => {
   return (
      <>
         <Navigation />
         <main className="pt-4 pt-xxs-5">
            <section className="ministry-hero">
               <img src={heroImg} alt="" className="ministry-hero-img" />
               <div className="overlay"></div>
               <div className="ministry-hero-container container d-flex flex-row justify-content-center align-items-center">
                  <h1 className="ministry-hero-text text-white text-center">OUR MINISTRY</h1>
               </div>
            </section>

            <section className="ministry-nav py-3">
               <div className="ministry-nav-container container overflow-auto">
                  <div className="nav-container w-100 d-flex flex-row  justify-content-center gap-5 py-3">
                     <Link to="/ministry/men-ministry" className="color text-primary">
                        <div className="men-ministry text-center rounded-pill text-primary fw-bold">
                           <img src={men} alt="" className="me-2" />
                           Mens Ministry
                        </div>
                     </Link>

                     <Link to="/ministry/women-ministry" className="color text-primary">
                        <div className="women-ministry text-center rounded-pill text-primary fw-bold">
                           <img src={women} alt="" className="me-2" />
                           Women's Ministry
                        </div>
                     </Link>

                     <Link to="/ministry/youth-ministry" className="color text-primary">
                        <div className="youth-ministry text-center rounded-pill text-primary fw-bold">
                           <img src={youth} alt="" className="me-2" />
                           Youth's Ministry
                        </div>
                     </Link>

                     <Link to="/ministry/children-ministry" className="color text-primary">
                        <div className="children-ministry text-center rounded-pill text-primary fw-bold">
                           <img src={children} alt="" className="me-2" />
                           Children's Ministry
                        </div>
                     </Link>
                  </div>
               </div>
            </section>

            <section className="ministry">
               <div className="ministry-container container py-4">
                  <Outlet />
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
};

export default Ministry;
