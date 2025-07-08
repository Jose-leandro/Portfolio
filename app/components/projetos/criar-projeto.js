import React from 'react';
import PropTypes from 'prop-types';
import ProjectSection from './sub-componets-criar-projeto/project-section';
import useAutoRespon from '../../../lib/useAutoRespon';
import withProjectLogic from './with-project-logic';

/**
 * The `CriarProjetos` component is responsible for rendering a section 
 * to create or display project details. It integrates positioning logic 
 * and dynamic rendering based on visibility.
 *
 * @param {Object} props - The component props.
 * @param {Object} props.projectData - Project data object.
 * @param {boolean} props.visibility - Visibility flag.
 * @param {function} props.toggleDescription - Function to toggle description.
 * @param {Object} props.projectKeys - Keys related to the project.
 * @param {function} props.toggleVisibility - Function to toggle visibility.
 * @param {function} props.resetVisibility - Function to reset visibility.
 * @param {boolean} props.visibilityDescription - Visibility for description.
 * @param {function} props.toggleVisibilityDescription - Toggles description visibility.
 * @param {function} props.resetVisibilityDescription - Resets description visibility.
 * @returns {React.Element | null} The rendered component or null if no projectData.
 */
const CriarProjetos = ({
  projectKeys,
  projectData,
  visibility,
  toggleDescription,
  toggleVisibility,
  resetVisibility,
  visibilityDescription,
  toggleVisibilityDescription,
  resetVisibilityDescription
}) => {

  // Do not render if `projectData` is missing
  if (!projectData) { return undefined; }

  return (
    <div
      className={`h-auto w-auto mt-auto xl:mx-4 2xl:mx-0 justify-evenly flex-col items-center ${visibility ? 'flex' : 'hidden'
        }`}
    >
      <ProjectSection
        projectData={projectData}
        projectKeys={projectKeys}
        toggleDescription={toggleDescription}
        visibility={visibility}
        toggleVisibility={toggleVisibility}
        resetVisibility={resetVisibility}
        visibilityDescription={visibilityDescription}
        toggleVisibilityDescription={toggleVisibilityDescription}
        resetVisibilityDescription={resetVisibilityDescription}
      />
    </div>
  );
};

// Define PropTypes for validation
CriarProjetos.propTypes = {
  projectData: PropTypes.shape({
    urlDeploy: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    refElemSuporte: PropTypes.string.isRequired,
    referenceElementPosicionar: PropTypes.string.isRequired,
    imgProjeto: PropTypes.string.isRequired,
    nomeProjeto: PropTypes.string.isRequired,
    urlRepositorio: PropTypes.string.isRequired,
    textoDescricao: PropTypes.string.isRequired,
    numerosImagens: PropTypes.objectOf(
      PropTypes.shape({
        path: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  visibility: PropTypes.bool.isRequired,
  toggleDescription: PropTypes.func.isRequired,
  projectKeys: PropTypes.object.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
  resetVisibility: PropTypes.func.isRequired,
  visibilityDescription: PropTypes.bool.isRequired,
  toggleVisibilityDescription: PropTypes.func.isRequired,
  resetVisibilityDescription: PropTypes.func.isRequired,
};

// Wrap the component with additional logic
export default withProjectLogic(CriarProjetos);
