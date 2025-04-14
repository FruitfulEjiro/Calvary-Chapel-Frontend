import { Link } from "react-router-dom";
import { FaYoutube, FaArrowRight } from "react-icons/fa";

// Components
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";

// Images
import heroImg from "../assets/images/home.png";

// Svgs
import pulpit from "../assets/svg/pulpit.svg";
import bible from "../assets/svg/bible.svg";

// Styles
import "../styles/styles.css";

const Home = () => {
   return (
      <>
         <Navigation />
         <main>
            <section className="hero">
               <img src={heroImg} alt="" className="hero-img" />
               <div className="overlay"></div>
               <div className="hero-container container d-flex flex-column justify-content-center align-items-center">
                  <h1 className="hero-text text-white text-center px-4">WELCOME TO CALVARY CHAPEL TURKU</h1>
                  <p className="hero-sub-text text-white text-center">
                     Calvary Chapel is an international, non-denominational church. Our most noticeable distinctive is
                     the emphasis we place on the Word of God: we believe the Bible to the inspired and inerrant
                     revelation of God, and we teach it in our services book by book and verse by verse.
                  </p>
               </div>
            </section>

            <section className="writeup">
               <div className="writeup-container container pb-4">
                  <div className="services position-relative p-3 mx-xlg-auto d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3">
                     <p className="service-text m-0 p-0 text-primary">Our Weekly Services</p>
                     <div className="sunday-service p-2">
                        <img src={pulpit} alt="" className="sunday-service-svg" />
                        <h6 className="service-header m-0 p-0">Sunday Service</h6>
                        <p className="service-time m-0 p-0">11.00 am (every week)</p>
                     </div>
                     <div className="wednesday-service p-2">
                        <img src={bible} alt="" className="wednesday-service-svg" />
                        <h6 className="service-header m-0 p-0">Wednesday Service</h6>
                        <p className="service-time m-0 p-0">7.00 pm (every week)</p>
                     </div>
                  </div>
                  <p className="text text-center m-0 p-0">
                     Calvary Chapel is an international, non-denominational church. Our most noticeable distinctive is
                     the emphasis we place on the Word of God: we believe the Bible to the inspired and inerrant
                     revelation of God, and we teach it in our services book by book and verse by verse.
                  </p>
                  <div className="teaching mt-1 pt-3 mx-lg-auto">
                     <div className="wednesday-teaching p-3 my-3 d-flex flex-column align-items-center justify-content-center">
                        <h6 className="teaching-header text-primary fw-bold">WEDNESDAY TEACHING</h6>
                        <p className="teaching-text text-center">
                           Lorem ipsum dolor sit amet consectetur. Nunc morbi egestas a euismod est adipiscing tristique
                           arcu. Facilisis tristique viverra velit volutpat purus faucibus. Est tortor.
                        </p>
                        <FaArrowRight className="arrow-right" />
                     </div>
                     <div className="sunday-teaching p-3 my-3 d-flex flex-column align-items-center justify-content-center">
                        <h6 className="teaching-header text-primary fw-bold">SUNDAY TEACHING</h6>
                        <p className="teaching-text text-center">
                           Lorem ipsum dolor sit amet consectetur. Nunc morbi egestas a euismod est adipiscing tristique
                           arcu. Facilisis tristique viverra velit volutpat purus faucibus. Est tortor.
                        </p>
                        <FaArrowRight className="arrow-right" />
                     </div>
                     <div className="youtube p-3 my-3 my-sm-0 my-xlg-3 mx-lg-auto d-flex flex-column align-items-center justify-content-center">
                        <Link to="#" className="fw-bold d-flex flex-column align-items-center justify-content-center">
                           YOUTUBE <br />
                           <FaYoutube className="youtube-icon" />
                        </Link>
                     </div>
                  </div>
               </div>
            </section>
         </main>
         <Footer />
      </>
   );
};

export default Home;
