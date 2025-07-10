import React from "react";
import PropTypes from "prop-types";
import ProjectTechnologies from "./project-technologies";

function ProjectInformationPanel({ projectData, resetVisibility, visibilityDescription, resetVisibilityDescription}) {

  function handleDescriptionClick() {
    resetVisibility()
    resetVisibilityDescription(); 
  };
  
  return (
    <div className={`bg-transparent border-[1.9px] border-solid border-custom-white 
          rounded-xl p-6 text-center h-auto w-3/5 mt-16 ${visibilityDescription ? "block" : "hidden"}`}>
      {/* Close Button */}

      <div className="flex flex-col w-auto h-auto items-end mb-2">
        <button className="py-1 px-2 bg-transparent border-[1.9px] border-solid border-custom-white rounded" 
        // eslint-disable-next-line react/jsx-no-bind
        onClick={handleDescriptionClick}>
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
  projectData: PropTypes.arrayOf(
    PropTypes.shape({
      textoDescricao: PropTypes.string.isRequired,
      numerosImagens: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
  resetVisibility: PropTypes.func.isRequired,
  resetVisibilityDescription: PropTypes.func.isRequired,
  visibilityDescription: PropTypes.bool.isRequired,
};

export default ProjectInformationPanel;
