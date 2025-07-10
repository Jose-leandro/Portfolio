import React from "react";
import PropTypes from "prop-types";
import ActionButton from "./sub-compoanet-project-action-buttons/action-button";
import clsx from "clsx";

const openLink = (url) => window.open(url, "_blank");

const headingClass =
  "py-2 px-3 sm:my-2 xl:ml-10 font-extralight sm:px-6 bg-ligth-dark rounded-lg text-center sm:py-3 shadow-customShadow font-domine";

const getButtonClass = (isActive, isHovered) =>
  clsx(
    "cursor-pointer border-[1.9px] border-solid border-custom-white rounded-xl py-2 px-4 text-center mx-2 text-white h-auto bg-ligth-dark font-serif",
    {
      "hover:rounded-lg": isHovered,
      "active:rounded-md": isActive,
    }
  );

/**
 * ProjectActionButtons component
 *
 * @param {Object} props
 * @param {Array} props.projectData - Array with project information.
 * @param {string[]} props.projectKeys - Keys used to identify the project.
 * @param {Function} props.toggleVisibility - Function to toggle visibility of project section.
 * @param {Function} props.toggleVisibilityDescription - Function to toggle description panel visibility.
 * @returns React.JSX.Element
 */
export default function ProjectActionButtons({projectData, projectKeys, toggleVisibility, toggleVisibilityDescription,}) {
  const handleVisualizarClick = () => openLink(projectData[0].urlDeploy);
  const handleRepositorioClick = () => openLink(projectData[0].urlRepositorio);
  const handleDescriptionClick = () => { toggleVisibility(projectKeys); toggleVisibilityDescription(projectKeys);};

  const buttons = [
    { label: "Descrição", onClick: handleDescriptionClick },
    { label: "Visualizar", onClick: handleVisualizarClick },
    { label: "Repositório", onClick: handleRepositorioClick },
  ];

  return (
    <div className="items-center rounded-2xl flex flex-col h-44 w-[90%] md:w-[95%] xl:h-[256px]
     justify-evenly absolute text-center top-auto xl:w-[410px] bg-dark-clear opacity-0 hover:opacity-100" >
      
      <h2 className={headingClass}> {projectData[0].nomeProjeto} </h2>

      <div className="flex justify-evenly w-full">
        {buttons.map((button) => (
          <ActionButton
            className={getButtonClass(false, true)}
            key={button.label}
            label={button.label}
            onClick={button.onClick}
          />
        ))}
      </div>
    </div>
  );
}

// ✅ PropTypes validation
ProjectActionButtons.propTypes = {
  projectData: PropTypes.arrayOf(
    PropTypes.shape({
      nomeProjeto: PropTypes.string.isRequired,
      urlDeploy: PropTypes.string.isRequired,
      urlRepositorio: PropTypes.string.isRequired,
    })
  ).isRequired,
  projectKeys: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleVisibility: PropTypes.func.isRequired,
  toggleVisibilityDescription: PropTypes.func.isRequired,
};

