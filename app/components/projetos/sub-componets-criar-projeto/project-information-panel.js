import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProjectTechnologies from "./project-technologies";

function ProjectInformationPanel({ projectData, toggleVisibility, visibility, resetVisibility, visibilityDescription, toggleVisibilityDescription, projectKeys, resetVisibilityDescription}) {

  // useEffect(()=> {
  //   console.log(visibilityDescription)
  // }, [visibilityDescription])

  const handleDescriptionClick = () => {
    resetVisibility()
    resetVisibilityDescription(); 
  };
  
  return (
    <div className={`bg-transparent border-[1.9px] border-solid border-custom-white 
          rounded-xl p-6 text-center h-auto w-3/5 mt-16 ${visibilityDescription ? "block" : "hidden"}`}>
      {/* Close Button */}

      <div className="flex flex-col w-auto h-auto items-end mb-2">
        <button className="py-1 px-2 bg-transparent border-[1.9px] border-solid border-custom-white 
        rounded" onClick={handleDescriptionClick}>
          X
        </button>
      </div>

      {/* Project Description */}
      <p className="flex items-center leading-6 mb-4 text-left">
        {projectData[0].textoDescricao}
      </p>

      {/* Technologies */}
      <ProjectTechnologies tecnologias={projectData[0].numerosImagens} />
    </div>
  );
}

// PropTypes
ProjectInformationPanel.propTypes = {
  projectData: PropTypes.shape({
    projectDescription: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  toggleDescription: PropTypes.bool,
  onClosePanel: PropTypes.func.isRequired,
};

export default ProjectInformationPanel;
