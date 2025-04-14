import React from "react";

// Svgs
import statement from "../assets/svg/statement.svg";
import cross from "../assets/svg/cross.svg";

const Statement = () => {
   return (
      <>
         <div className="statement-section d-flex flex-column align-items-center justify-content-center gap-4 py-5">
            <h4 className="about-us-heading text-center text-white fw-bolder mb-3">
               <img src={statement} alt="" className="me-2" />
               WHAT WE BELEIVE
               <img src={statement} alt="" className="ms-2" />
            </h4>

            <div className="bible container d-flex flex-column align-items-center justify-content-center py-3">
               <h4 className="bible-heading text-center text-primary fw-bolder mb-3">
                  <img src={cross} alt="" className="me-2" />
                  BIBLE
                  <img src={cross} alt="" className="ms-2" />
               </h4>
               <p className="bible-text m-0">
                  In the inerrancy of Scripture: That the Bible, Old and New Testaments, in the original autographs, is
                  the inspired, infallible Word of God, a complete and final written revelation of God. We reject
                  doctrinal viewpoints or spiritual phenomena which find their basis for practice in the church solely
                  on experience. We look to the Word of God for the basis of all our faith and practice. <br />{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; In the full historicity of the biblical
                  record of primeval history, including the creation of the heavens and the earth in six literal days,
                  the literal existence of Adam and Eve as the progenitors of all people, the literal fall in the Garden
                  of Eden and resultant divine curse on creation, the worldwide cataclysmic deluge, and the origin of
                  the nations and languages at the tower of Babel.
               </p>
            </div>

            <div className="God container d-flex flex-column align-items-center justify-content-center py-3">
               <h4 className="God-heading text-center text-primary fw-bolder mb-3">
                  <img src={cross} alt="" className="me-2" />
                  GOD
                  <img src={cross} alt="" className="ms-2" />
               </h4>
               <p className="God-text m-0">
                  in one personal, Triune God, who manifests Himself in three separate persons: Father, Son and Holy
                  Spirit. He is essentially Spirit, the creator of all, who is eternal, almighty, transcendent,
                  sovereign, life, love, truth, wise, just, holy, pure, unchangeable and infallible in all things, yet
                  relational and personal.
               </p>
            </div>

            <div className="Jesus container d-flex flex-column align-items-center justify-content-center py-3">
               <h4 className="Jesus-heading text-center text-primary fw-bolder mb-3">
                  <img src={cross} alt="" className="me-2" />
                  JESUS
                  <img src={cross} alt="" className="ms-2" />
               </h4>
               <p className="Jesus-text m-0">
                  That Jesus Christ is fully God and fully human, possessing two distinct natures which are co-joined in
                  one person; that He was miraculously conceived by the Holy Spirit, born of the virgin Mary, lived a
                  sinless and miraculous life, provided for the atonement of our sins by His vicarious substitutionary
                  death on the Cross, was physically resurrected by the power of the Holy Spirit and physically ascended
                  to the right hand of God the Father in heaven. Who after His ascension, poured out His Holy Spirit on
                  the believers in Jerusalem, enabling them to fulfill His command to preach the Gospel to the entire
                  world; an empowerment and obligation all believers since have shared in. One day Jesus will return in
                  similar manner as He ascended (Acts 1:11; Matt 24:30).
               </p>
            </div>

            <div className="holy-spirit container d-flex flex-column align-items-center justify-content-center py-3">
               <h4 className="holy-spirit-heading text-center text-primary fw-bolder mb-3">
                  <img src={cross} alt="" className="me-2" />
                  HOLY SPIRIT
                  <img src={cross} alt="" className="ms-2" />
               </h4>
               <p className="holy-spirit-text m-0">
                  The Holy Spirit is the third person of the Godhead, thus He is a personal being not an impersonal
                  force. He seals, indwells, sanctifies, baptizes, teaches, empowers, reveals, and guides the believer
                  into all truth. The Holy Spirit gives gifts to whom He wills, which are valid for today, and ought to
                  be exercised within scriptural guidelines. We as believers are to earnestly desire the best gifts,
                  seeking to exercise them in love that the whole Body of Christ might be edified. We believe that love
                  is more important than the most spectacular gifts, and without this love all exercise of spiritual
                  gifts is worthless.
               </p>
            </div>

            <div className="man-sin container d-flex flex-column align-items-center justify-content-center py-3">
               <h4 className="man-sin-heading text-center text-primary fw-bolder mb-3">
                  <img src={cross} alt="" className="me-2" />
                  MAN/SIN
                  <img src={cross} alt="" className="ms-2" />
               </h4>
               <p className="man-sin-text m-0">
                  That all people are by nature separated from God and are responsible for their own sin, but that
                  salvation, redemption, and forgiveness are freely offered to all by the grace of our Lord Jesus
                  Christ. When a person repents of their sin and places their faith in Jesus Christ as the Savior and
                  Lord, trusting Him to save and submitting to His Lordship, that person is immediately born again and
                  sealed by the Holy Spirit, all his/her sins are forgiven, and that person becomes a child of God
               </p>
            </div>

            <div className="salvation container d-flex flex-column align-items-center justify-content-center py-3">
               <h4 className="salvation-heading text-center text-primary fw-bolder mb-3">
                  <img src={cross} alt="" className="me-2" />
                  SALVATION
                  <img src={cross} alt="" className="ms-2" />
               </h4>
               <p className="salvation-text m-0">
                  Salvation is initiated, attained, and procured by God through the death of Christ on the cross for our
                  sins and His resurrection from the dead. The salvation Christ offers is available to all, and is
                  received freely by grace alone and through faith in Christ alone, apart from good works, thereby
                  justifying, sanctifying and eventually glorifying the believer
               </p>
            </div>

            <div className="church container d-flex flex-column align-items-center justify-content-center py-3">
               <h4 className="church-heading text-center text-primary fw-bolder mb-3">
                  <img src={cross} alt="" className="me-2" />
                  CHURCH
                  <img src={cross} alt="" className="ms-2" />
               </h4>
               <p className="church-text m-0">
                  The universal Church is an organic body composed of all believers, both living and dead, who have been
                  sealed by the Holy Spirit through faith in Jesus Christ for salvation. The church has the
                  responsibility to worship the Lord and share the good news of Christ’s death and resurrection to the
                  world, making disciples, baptizing believers, and teaching them to observe sound doctrine and live a
                  morally pure life. We believe church government should be simple rather than a complex bureaucracy,
                  with the utmost dependence upon the Holy Spirit to lead, rather than on fleshly promotion or worldly
                  wisdom. The Lord has given the church two ordinances which are to continue until He returns —
                  believers baptism by immersion and Holy Communion. Water baptism is not necessary for salvation, and
                  cannot remove sins, but is a picture of the salvation already received by the believer. We believe the
                  only true basis of Christian fellowship is Christ’s sacrificial agape love, which is greater than any
                  secondary differences we possess, and without which we have no right to claim ourselves Christians.
               </p>
            </div>

            <div className="end-times container d-flex flex-column align-items-center justify-content-center py-3">
               <h4 className="end-times-heading text-center text-primary fw-bolder mb-3">
                  <img src={cross} alt="" className="me-2" />
                  END TIMES
                  <img src={cross} alt="" className="ms-2" />
               </h4>
               <p className="end-times-text m-0">
                  We await the pre-tribulational rapture of the church, and we believe that at the Second Coming of
                  Christ He will visibly set up his throne on earth and personally rule with His saints for 1000 years.
                  This motivates us to holy living, heartfelt worship, committed service, diligent study of God’s Word,
                  regular fellowship, and participation in baptism by immersion and in Holy Communion. We believe that
                  the nation of Israel still has a special place in God’s plan and that all the promises of the God of
                  Israel will be fulfilled
               </p>
            </div>
         </div>
      </>
   );
};

export default Statement;
