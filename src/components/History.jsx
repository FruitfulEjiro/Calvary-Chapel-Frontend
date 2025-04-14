import React from "react";

// Images
import about2 from "../assets/images/about-2.jpg";
import chapelHistory from "../assets/images/chapel-history.jpg";

// Svgs
import history from "../assets/svg/history.svg";

const History = () => {
   return (
      <>
         <div className="about-section d-flex flex-column align-items-center justify-content-center">
            <div className="about-us container py-4">
               <h4 className="about-us-heading text-center text-primary fw-bolder mb-4">
                  <img src={history} alt="" className="me-2" />
                  About Us
                  <img src={history} alt="" className="ms-2" />
               </h4>
               <div className="about-us-container d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center gap-3">
                  <p className="about-us-text">
                     Calvary Chapel has been formed as a fellowship of believers in the Lordship of Jesus Christ. Our
                     supreme desire is to know Christ, to grow our faith in Him and ultimately be conformed to His image
                     by the power of the Holy Spirit and the Word of God (Rom 8:29; John 17:17). <br />
                     <br />
                     As there is within the Word of God everything that is needed for life and godliness (2 Pe 1:3) it
                     becomes evident that without ample, clear and thorough Bible teaching in the church, such desired
                     growth as described above will not be reached. This is why in CCT we prioritize teaching through
                     the Bible during our weekly services. Imagine the power that is present as the Holy Spirit works in
                     us through the teaching of the Word of God (2 Tim 3:16-17; John 14:26). Come study His Word with
                     us!
                  </p>
                  <img className="about-us-img" src={about2} alt="" />
               </div>
            </div>
            <div className="brief container-fluid py-4">
               <div className="brief-container container p-0">
                  <h4 className="brief-heading text-center text-white fw-bolder mb-3 p-0">
                     <img src={history} alt="" className="me-2" />
                     A Brief History of CCT
                     <img src={history} alt="" className="ms-2" />
                  </h4>
                  <div className="brief-container d-flex flex-column align-items-center justify-content-center">
                     <p className="brief-text text-white text-center">
                        Calvary Chapel Turku began in 2005 in a small apartment in Varissuo Turku as a home Bible Study.
                        Since then CCT has been steadily teaching through the Bible with two weekly services, one on
                        Sunday and a midweek service on Wednesday evening. Since the time of those original Bible
                        studies in Varissuo, CCT has relocated to Takamaantie 15 to accommodate the growing number of
                        people and ministries within the church.
                     </p>
                  </div>
               </div>
            </div>
            <div className="history container py-4">
               <h4 className="history-heading text-center text-primary fw-bolder mb-4 p-0">
                  <img src={history} alt="" className="me-2" />
                  History of Calvary Chapel
                  <img src={history} alt="" className="ms-2" />
               </h4>
               <div className="history-container d-flex flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center gap-3">
                  <img className="history-img mb-3" src={chapelHistory} alt="" />
                  <p className="history-text">
                     In 1965, Pastor Chuck Smith began his ministry at Calvary Chapel Costa Mesa with just 25 people.
                     From the beginning, Pastor Chuck welcomed all, young and old, without judgment, placing his
                     emphasis on the teaching of the Word of God. His simple, yet sound, biblical approach drew 25,000
                     people weekly.
                     <br />
                     <br />
                     With a sincere concern for the lost, Pastor Chuck made room in his heart and his home for a
                     generation of hippies and surfers, generating a movement of the Holy Spirit that spread from the
                     West Coast to the East Coast, and now, throughout the world. What began as a small local church has
                     now grown into an international ministry of over 1,800 fellowships throughout the world.
                     <br />
                     <br />
                     Here in our website, we invite you to find out more about who we are today, what we believe, where
                     we are throughout the world; and we invite you to join us as we meet and worship our wonderful Lord
                     and Savior, study His Word, fellowship together, grow in His grace, and desire to make disciples
                     and go into all the world. For a more in-depth look at the history of Calvary Chapel, we recommend
                     reading The Reproducers. You can download a free digital copy as a PDF or ePub.
                  </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default History;
