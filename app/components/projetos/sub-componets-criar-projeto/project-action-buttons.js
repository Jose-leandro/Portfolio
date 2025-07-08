import React, { useEffect } from "react";
import PropTypes from "prop-types";
// import withPositioning from "./with-positioning";
import ActionButton from "./sub-compoanet-project-action-buttons/action-button";
import clsx from 'clsx';

/**
 * Opens a given URL in a new tab.
 * 
 * @param {string} url - The URL to open.
 * @returns {Window|null} The window object of the newly opened tab or null if it failed.
 */
const openLink = (url) => window.open(url, '_blank');


const headingClass = "py-2 px-3 sm:my-2 xl:ml-10 font-extralight sm:px-6 bg-ligth-dark rounded-lg text-center sm:py-3 shadow-customShadow font-domine";


const getButtonClass = (isActive, isHovered) => clsx(
  "cursor-pointer border-[1.9px] border-solid border-custom-white rounded-xl py-2 px-4 text-center mx-2 text-white h-auto bg-ligth-dark font-serif",
  {
    "hover:rounded-lg": isHovered,
    "active:rounded-md": isActive
  }
);

/**
 * @param projectKeys.projectKeys
 * @param {Object} projectData - The data related to the project.
 * @returns {JSX.Element} The rendered component.
 */
export default function ProjectActionButtons({ projectData, projectKeys, toggleVisibility, toggleVisibilityDescription }) {
  // console.log(projectKeys

  

  const handleVisualizarClick = () => openLink(projectData[0].urlDeploy);
  const handleRepositorioClick = () => openLink(projectData[0].urlRepository);

  
  const handleDescriptionClick = () => {
    toggleVisibility(projectKeys)
    toggleVisibilityDescription(projectKeys); // ✅ this updates the state

    // console.log(visibilityDescription)
  };

  const buttons = [
    { label: "Descrição", onClick: handleDescriptionClick },
    { label: "Visualizar", onClick: handleVisualizarClick },
    { label: "Repositório", onClick: handleRepositorioClick }
  ];

  // console.log(projectKeys)

  // console.log("projectKeys:", projectKeys);
  // console.log("projectKeys.projectData:", projectKeys?.projectData);



  return (
    <div className="items-center rounded-2xl flex flex-col h-44 w-[90%] md:w-[95%] xl:h-[256px]
     justify-evenly absolute text-center top-auto xl:w-[410px] bg-dark-clear opacity-0 
     hover:opacity-100"
    //  id={projectKeys.projectData[0].referenceElementPosition} ref={projectKeys.projectData[0].referenceElementPosition}
    >

      <h2 className={headingClass}> {projectData[0].nomeProjeto} </h2>

      <div className="flex justify-evenly w-full">
        {buttons.map((button) => (
          <ActionButton className={getButtonClass(false, true)} key={button.label} label={button.label} onClick={button.onClick} />
        ))}
      </div>
    </div>
  );
}


// // PropTypes validation
// ProjectActionButtons.propTypes = {
// };

// Wrap the component with the HOC during export
// export default withPositioning(ProjectActionButtons);