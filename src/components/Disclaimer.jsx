import React from "react";

const Disclaimer = ({ darkTheme }) => {
  return (
    <div
      id="disclaimer"
      className="modal fade"
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-lg modal-dialog-centered"
        role="document"
      >
        <div
          className={
            "modal-content " + (darkTheme ? "bg-dark-2 text-light" : "")
          }
        >
          <div className="modal-header">
            <h5 className={"modal-title " + (darkTheme ? "text-white" : "")}>
              Professional Archaeology
            </h5>
            <button
              type="button"
              className={"btn-close " + (darkTheme ? "btn-close-white" : "")}
              data-bs-dismiss="modal"
              aria-label="Close"
            />
          </div>
          <div className="modal-body p-4">
            <p>
              I am a former professional archaeologist turned Solidity Blockchain Developer.  This secret section outlines some of my archaeological accomplishments.
            </p>
            <ul className="lh-lg">
              <li>
                I have worked in Israel for seven summers spanning 2013-2019 on a site called tel Akko which 
                was occupied from the Middle Bronze Age (during the time of the Egyptians/ Hittites) to the Hellenistic
                period around 323 B.c. (the conquest of Alexander the Great)
              </li>
              <li>
                I have worked in both Hawaii and Alaska on some very interesting projects
              </li>
              <li>
                The film "Holes," starring Shia LaBeouf, provides one of the most faithful representations 
                of the typical experiences in archaeological fieldwork.
              </li>
              <li>
                I have likly seen more of the American backcountry than most Americans will see in their lifetime.
                An avarage day includes walking 5+ kilometers.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Disclaimer;
