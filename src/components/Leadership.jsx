import React from "react";

// Images
import robert from "../assets/images/robert.png";
import kyle from "../assets/images/kyle.png";
import jaako from "../assets/images/jaako.png";
import olli from "../assets/images/olli.png";

// Svgs
import mail from "../assets/svg/mail.svg";

const Leadership = () => {
   return (
      <>
         <div className="leadership-section container d-flex flex-column align-items-center justify-content-center gap-4">
            <div className="robert-profile container w-100 d-lg-flex flex-row align-items-center justify-content-center gap-3 py-3">
               <img src={robert} alt="" className="profile-img" />
               <div className="profile-write-up">
                  <div className="name-title d-flex flex-row align-items-center justify-content-start gap-3 p-2">
                     <p className="profile-name m-0">Robert Pecoraro</p>
                     <p className="title badge text-primary m-0">Pastor</p>
                  </div>
                  <div className="mail d-flex flex-row align-items-center justify-content-start gap-3 p-2 mb-3">
                     <img src={mail} alt="" />
                     <p className="mail m-0">robertpecoraro@calvarychapel.fi</p>
                  </div>
                  <p className="about-badge badge fw-bold p-2 rounded-pill">about me</p>
                  <p className="profile-text">
                     Lorem ipsum dolor sit amet consectetur. Arcu dictum sapien amet et tristique vitae gravida sed
                     imperdiet. Arcu porta porttitor sit fringilla. Nisi arcu ac rhoncus viverra vitae sed aliquam
                     porta. Etiam imperdiet est ac volutpat mauris. Tellus amet scelerisque erat posuere amet tincidunt.
                     Augue morbi et magna tellus. Convallis in luctus pulvinar velit. In aliquet in sodales curabitur.
                     Sapien egestas quam euismod augue. Consequat felis morbi nibh eu at diam. Nam pellentesque integer
                     amet nisi.
                  </p>
               </div>
            </div>

            <div className="kyle-profile container w-100 d-lg-flex flex-row align-items-center justify-content-center gap-3 py-3">
               <img src={kyle} alt="" className="profile-img" />
               <div className="profile-write-up">
                  <div className="name-title d-flex flex-row align-items-center justify-content-start gap-3 p-2">
                     <p className="profile-name m-0">Kyle Bentz</p>
                     <p className="title badge text-primary m-0">Elder</p>
                  </div>
                  <div className="mail d-flex flex-row align-items-center justify-content-start gap-3 p-2 mb-3">
                     <img src={mail} alt="" />
                     <p className="mail m-0">kylebentz@calvarychapel.fi</p>
                  </div>
                  <p className="about-badge badge fw-bold p-2 rounded-pill">about me</p>
                  <p className="profile-text">
                     Lorem ipsum dolor sit amet consectetur. Arcu dictum sapien amet et tristique vitae gravida sed
                     imperdiet. Arcu porta porttitor sit fringilla. Nisi arcu ac rhoncus viverra vitae sed aliquam
                     porta. Etiam imperdiet est ac volutpat mauris. Tellus amet scelerisque erat posuere amet tincidunt.
                     Augue morbi et magna tellus. Convallis in luctus pulvinar velit. In aliquet in sodales curabitur.
                     Sapien egestas quam euismod augue. Consequat felis morbi nibh eu at diam. Nam pellentesque integer
                     amet nisi.
                  </p>
               </div>
            </div>

            <div className="jaakko-profile container w-100 d-lg-flex flex-row align-items-center justify-content-center gap-3 py-3">
               <img src={jaako} alt="" className="profile-img" />
               <div className="profile-write-up">
                  <div className="name-title d-flex flex-row align-items-center justify-content-start gap-3 p-2">
                     <p className="profile-name m-0">Jaakko Haapanen</p>
                     <p className="title badge text-primary m-0">Elder</p>
                  </div>
                  <div className="mail d-flex flex-row align-items-center justify-content-start gap-3 p-2 mb-3">
                     <img src={mail} alt="" />
                     <p className="mail m-0">JaakkoHaapanen@calvarychapel.fi</p>
                  </div>
                  <p className="about-badge badge fw-bold p-2 rounded-pill">about me</p>
                  <p className="profile-text">
                     Lorem ipsum dolor sit amet consectetur. Arcu dictum sapien amet et tristique vitae gravida sed
                     imperdiet. Arcu porta porttitor sit fringilla. Nisi arcu ac rhoncus viverra vitae sed aliquam
                     porta. Etiam imperdiet est ac volutpat mauris. Tellus amet scelerisque erat posuere amet tincidunt.
                     Augue morbi et magna tellus. Convallis in luctus pulvinar velit. In aliquet in sodales curabitur.
                     Sapien egestas quam euismod augue. Consequat felis morbi nibh eu at diam. Nam pellentesque integer
                     amet nisi.
                  </p>
               </div>
            </div>

            <div className="olli-profile container w-100 d-lg-flex flex-row align-items-center justify-content-center gap-3 py-3">
               <img src={olli} alt="" className="profile-img" />
               <div className="profile-write-up">
                  <div className="name-title d-flex flex-row align-items-center justify-content-start gap-3 p-2">
                     <p className="profile-name m-0">Olli Förbom</p>
                     <p className="title badge text-primary m-0">Board Member</p>
                  </div>
                  <div className="mail d-flex flex-row align-items-center justify-content-start gap-3 p-2 mb-3">
                     <img src={mail} alt="" />
                     <p className="mail m-0">robertpecoraro@calvarychapel.fi</p>
                  </div>
                  <p className="about-badge badge fw-bold p-2 rounded-pill">about me</p>
                  <p className="profile-text">
                     Lorem ipsum dolor sit amet consectetur. Arcu dictum sapien amet et tristique vitae gravida sed
                     imperdiet. Arcu porta porttitor sit fringilla. Nisi arcu ac rhoncus viverra vitae sed aliquam
                     porta. Etiam imperdiet est ac volutpat mauris. Tellus amet scelerisque erat posuere amet tincidunt.
                     Augue morbi et magna tellus. Convallis in luctus pulvinar velit. In aliquet in sodales curabitur.
                     Sapien egestas quam euismod augue. Consequat felis morbi nibh eu at diam. Nam pellentesque integer
                     amet nisi.
                  </p>
               </div>
            </div>
         </div>
      </>
   );
};

export default Leadership;
