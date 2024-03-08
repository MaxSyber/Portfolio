import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "October 2022 - April 2023",
      title: "Solidty Full Stack Bootcamp",
      place: "Dapp University",
      desc: "Created a decentralized cryptocurrency exchange to trade coin pairs. This included the creation of both token and exchange smart contracts on the Goerli test network",
    },
    {
      yearRange: "2010 - 2014",
      title: "Bachelor of Science",
      place: "The Pennsylvania State University",
      desc: "Completed a four year bachelors degree.",
    },
  ];

  const experienceDetails = [
    {
      yearRange: "February 2024 - March 2024",
      title: "Lead Blockchain Developer",
      place: "Fastlane-(Hackathon EthDenver 2024)",
      desc: "To develop the backend for Fastlane, I utilized Solidity contracts to facilitate transactions and mint track segments seamlessly within the game.  By integrating blockchain technology, I aimed to enhance the gaming experience by providing transparency, security, and seamless in-game asset management.",
    },
    {
      yearRange: "January 2024",
      title: "Blockchain Developer",
      place: "NewAge AI Art Gallery",
      desc: "Developed a full-stack web 3.0 application and Solidity smart contract to facilitate the physical printing and procurement of your favorite AI-generated artwork. This project serves as a simple yet effective marketplace for purchasing your preferred AI-generated art images.",
    },
    {
      yearRange: "April 2023 - August 2023",
      title: "Full Stack Solidity Developer",
      place: "Syber Tickets",
      desc: "Created a web 3.0 ticketing application that is reshaping the very essence of event ticketing. Powered by smart contracts on the Polygon Network, Syber Tickets uses the concept of soulbound NFTs to issue non-transferable event tickets",
    },
    {
      yearRange: "2014 - 2022",
      title: "Archaeologist",
      place: "Multiple Companies",
      desc: "Conducted archaeological excavation across varios sites, completed accurate field notes, wrote reports, collected geospatial data, led field crews, and submitted results to appropriate state and federal antiquity departments.",
    },
  ];

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
            }
          >
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Education
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              My Experience
            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>
                    {value.desc}
                  </p>
                </div>
              ))}
          </div>
        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
