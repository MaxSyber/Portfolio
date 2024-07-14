import React from "react";
import resumeFile from "../documents/resume.pdf";
const AboutUs = ({ classicHeader, darkTheme }) => {
  return (
    <section id="about" className={"section " + (darkTheme ? "bg-dark-1" : "")}>
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            About Me
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            About Me
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gy-5">
          {/* About me content start */}
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2
              className={
                "text-7 fw-600 mb-3 " + (darkTheme ? "text-white" : "")
              }
            >
              I'm <span className="text-primary">Brett Seibert,</span> Full Stack Solidity Developer
            </h2>
            <p className={darkTheme ? "text-white-50" : ""}>
              I am a Solidity developer with an interest in creating smart contracts for the Web 3.0 space. I enjoy being on the cutting edge of new 
              technology and love contributing to the future of blockchain ecosystems. My experience is primarily focused on smart contract 
              development within the Ethereum network, along with all other EVM-compatible platforms.
            </p>
            <p className={darkTheme ? "text-white-50" : ""}>
              My particular interests within blockchain include web 3.0, tokenized assets (outside of collector NFTs), and soulbound NFTs.  
            </p>
          </div>
          {/* About me content end */}
          {/* about me personal detials start */}
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul
                className={
                  "list-style-2 " +
                  (darkTheme ? "list-style-light text-light" : "")
                }
              >
                <li>
                  <span className="fw-600 me-2">Name:</span>Bret Seibert
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="brs5241psu@gmail.com">brs5241psu@gmail.com</a>
                </li>
                {/*<li>
                  <span className="fw-600 me-2">Age:</span>31
                </li>
                */}
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Harrisburg, 
                  Pennsylvania
                </li>
              </ul>
              <a
                href={resumeFile}
                download
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
          {/* about me personal details end */}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
