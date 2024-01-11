import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    DESIGN: "Desing",
    BRAND: "Brand",
    PHOTOS: "Photos",
  };

  const projectsData = [
    {
      title: "Syber Tickets",
      projectInfo:
        "Syber Tickets is a web 3.0 ticketing application that is reshaping the very essence of event ticketing. Powered by smart contracts on the Polygon Network, Syber Tickets uses the concept of soulbound NFTs to issue non-transferable event tickets. (Deployed to the Polygon Matic test network).",
      technologies: "HTML5, CSS3, Solidity, Javascript, React, Hardhat",
      date: "August 2023",
      url: {
        name: "https://sybertickets.on.fleek.co/",
        link: "https://sybertickets.on.fleek.co/",
        git: "Syber Tickets",
        gitlink: "https://github.com/MaxSyber/Syber-Tickets",
        vid: "",
        vidlink: ""
      },
      thumbImage: "images/projects/Syber2.png",
      sliderImages: [
        "images/projects/Syber1.png",
        "images/projects/Syber2.png",
        "images/projects/Syber3.png",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "Dapp Token Exchange",
      projectInfo:
        "Dapp Token Exchange is a fully functioning decentralized cryptocurrency exchange created to facilitate the exchange of coin pairs. This app employs two smart contracts to create new cryptocurrencies as well as the exchange to trade them on. (Deployed to the Goerli test network).",
      technologies: "HTML5, CSS3, Solidity, Javascript, React, Hardhat",
      date: "April 2023",
      url: {
        name: "Dapp Token Exchange",
        link: "https://syberdappexhchange.on.fleek.co/",
        git: "Dapp Token Exchange",
        gitlink: "https://github.com/MaxSyber/blockchain-developer-bootcamp",
        vid: "",
        vidlink: ""
      },
      thumbImage: "images/projects/Dapp1.png",
      sliderImages: [
        "images/projects/Dapp1.png",
        "images/projects/Dapp2.png",
      ],
      categories: [filters.BRAND],
    },
    {
      title: "NewAge AI Art Gallery",
      projectInfo:
        "NewAge is a cutting-edge web 3.0 AI art gallery that showcases a curated collection of mesmerizing artworks crafted by artificial intelligence. With NewAge, you not only have the opportunity to appreciate these unique pieces but also to make them a tangible part of your space. Purchase your favorite AI-generated artwork, and we'll transform it into a stunning poster and send it straight to your doorstep. (Deployed to the Polygon Matic test network)",
      technologies: "Solidity, Javascript, React, DALL.E 2, Hardhat, Node.js, Ethers.js",
      date: "January 2024",
      url: {
        name: "Newage AI Art Gallery",
        link: "https://newage.on.fleek.co/",
        git: "Newage AI art",
        gitlink: "https://github.com/MaxSyber/Newage",
        vid: "",
        vidlink: ""
      },
      thumbImage: "images/projects/Newage1.jpg",
      sliderImages: [
        "images/projects/Newage1.jpg",
        "images/projects/Newage2.jpg",
        "images/projects/Newage3.jpg"
      ],
      categories: [filters.BRAND],
    },
    
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
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
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-6 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href="viewdetails"
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          > .</a>
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
