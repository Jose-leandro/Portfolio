import React from "react";
import PropTypes from "prop-types";
import ProjectActionButtons from "./project-action-buttons";
import ProjectInformationPanel from "./project-information-panel";
import ProjectImage from "./project-image-display";

export default function ProjectSection(projectData) {

  const id = projectData.projectData[0].id
  const imgProjeto = projectData.projectData[0].imgProjeto

  return (
    <div className="flex flex-col w-auto h-auto my-6 items-start" id={id}>

      <ProjectImage src={imgProjeto}
        imageRef={projectData.projectData[0].refElemSuporte}
      />

      {/* <ProjectActionButtons projectData={projectData.projectData[0]} /> */}
      {/* <ProjectInformationPanel projectData={projectData.projectData[0]} isVisible /> */}

    </div>
  );
}

// Define prop types for better clarity and validation
ProjectSection.propTypes = {
  projectData: PropTypes.shape({

  }).isRequired,
};