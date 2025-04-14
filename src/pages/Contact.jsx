import React from "react";

// Components
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

// Images
import heroImg from "../assets/images/home.png";

// Svgs
import contact from "../assets/svg/contact.svg";

// Styles
import "../styles/contact.css";

const Contact = () => {
   return (
      <>
         <Navigation />
         <main className="pt-4 pt-xxs-5">
            <section className="contact-hero">
               <img src={heroImg} alt="" className="contact-hero-img" />
               <div className="overlay"></div>
               <div className="contact-hero-container container d-flex flex-row justify-content-center align-items-center">
                  <h1 className="contact-hero-text text-white text-center">CONTACT US</h1>
               </div>
            </section>

            <section className="contact-container container d-flex flex-column flex-lg-row align-items-center justify-content-center justify-content-lg-between gap-4 py-4 mx-auto">
               <section className="address-wrapper container d-flex flex-column align-items-center justify-content-center py-4 ms-xlg-3">
                  <h3 className="address-header text-primary text-center m-0 mb-3">Church Address:</h3>
                  <p className="address-text p-2 px-3 m-0 mb-4">Takamaantie 1520720 Turku</p>
                  <img src="./images/map.png" className="address-img w-100 px-3" alt="" />
               </section>
               <section className="contact-wrapper container d-flex flex-column align-items-center justify-content-center py-5 me-xlg-3">
                  <h3 className="contact-header text-primary m-0">
                     <img src={contact} alt="" className="me-2" />
                     Contact
                     <img src={contact} alt="" className="ms-2" />
                  </h3>
                  <p className="contact-text text-center mt-3">
                     We’re here to serve you in every way that we can. You can message us by filling out the form below
                  </p>
                  <form action="" className="contact-form w-100">
                     <input type="text" className="firstname" placeholder="Firstname" required />
                     <input type="text" className="lastname" placeholder="Lastname" required />
                     <input type="email" className="email" placeholder="Email" required />
                     <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        className="message"
                        placeholder="Your Message"
                        required
                     ></textarea>
                     <button type="submit" className="submit-button btn btn-primary rounded-pill">
                        Submit
                     </button>
                  </form>
               </section>
            </section>
         </main>
         <Footer />
      </>
   );
};

export default Contact;
