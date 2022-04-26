import React from "react";
import FPNavbar from "./FPNavbar";
import ProfPageStatus from "./ProfPageStatus";

const ProfPageHeader = ({ photos }) => {
  return (
    <div>
      <FPNavbar />
      <div className="page-account">
        <ProfPageStatus photos={photos} />
      </div>
    </div>
  );
};

export default ProfPageHeader;
