import React from "react";
import PropTypes from "prop-types";
import ProjectActionButtons from "./project-action-buttons";
import ProjectInformationPanel from "./project-information-panel";
import ProjectImage from "./project-image-display";

export default function ProjectSection({ projectData, projectKeys, toggleDescription, visibility, toggleVisibility, resetVisibility, visibilityDescription, toggleVisibilityDescription, resetVisibilityDescription }) {

  const id = projectData[0].id
  const imgProjeto = projectData[0].imgProjeto


  return (
    <div className="flex flex-col w-auto h-auto my-6 items-center" id={id}>

      <ProjectImage src={imgProjeto}
        imageRef={projectData[0].refElemSuporte}
      />

      <ProjectActionButtons projectData={projectData} projectKeys={projectKeys} toggleVisibility={toggleVisibility} toggleVisibilityDescription={toggleVisibilityDescription} />
      <ProjectInformationPanel projectData={projectData} toggleVisibility={toggleVisibility} visibility={visibility} resetVisibility={resetVisibility} visibilityDescription={visibilityDescription}  toggleVisibilityDescription={toggleVisibilityDescription} projectKeys={projectKeys}  resetVisibilityDescription={resetVisibilityDescription} />

    </div>
  );
}

// Define prop types for better clarity and validation
// ProjectSection.propTypes = {
// };