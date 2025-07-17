'use client';
import React from 'react';
import PropTypes from 'prop-types';
import { domine } from '../../styles/fonts';
import CriarProjetos from './criar-projeto';
import projects from "../../../src/data/projects.json";
import { useToggleVisibility, useToggleVisibilityDescription } from '../../../hooks/use-toggle-visibility';

function ProjectList({ projects, visibility, toggleVisibility, resetVisibility, visibilityDescription, toggleVisibilityDescription, resetVisibilityDescription }) {

  return (
    <div className="flex justify-evenly items-start flex-wrap">
      {Object.keys(projects || {}).map((key) =>
        projects[key] ? (

          <CriarProjetos
            key={key}
            projectKeys={key}
            projectData={projects[key]}
            visibility={visibility[key]}
            toggleVisibility={toggleVisibility}
            resetVisibility={resetVisibility}
            visibilityDescription={visibilityDescription[key]}
            toggleVisibilityDescription={toggleVisibilityDescription}
            resetVisibilityDescription={resetVisibilityDescription}
          />
        ) : (
          <div key={key} className="error">Error: {key} data is not valid</div>
        )
      )}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.objectOf(PropTypes.object).isRequired,
  visibility: PropTypes.objectOf(PropTypes.bool).isRequired,
  toggleVisibility: PropTypes.func.isRequired,
  resetVisibility: PropTypes.func.isRequired,
  visibilityDescription: PropTypes.objectOf(PropTypes.bool).isRequired,
  toggleVisibilityDescription: PropTypes.func.isRequired,
  resetVisibilityDescription: PropTypes.func.isRequired,
};

/**
 * Data component displays a portfolio section with a list of projects.
 * It fetches project data and manages their visibility states.
 * @returns {React.ReactElement} The rendered Projects component.
 */
export default function Projects() {
  const projectKeys = ['calculadora', 'gedf', 'reanotes', 'spotifyimersaofrontend'];
  // console.log(error)

  const { visibility, toggleVisibility, resetVisibility } = useToggleVisibility()

  // console.log(visibility)

  const { toggleVisibilityDescription, visibilityDescription, resetVisibilityDescription } = useToggleVisibilityDescription();

  // if (error) { return <div className="error">Error fetching projects: {error.message}</div> }

  // Handle loading state
  if (!projects || Object.keys(projects).length === 0) {
    return <div className="loading">Loading projects...</div>;
  }

  return (
    <section className="w-full bg-dark py-10 rounded-md" id="projetos">
      <div className="projeto__titulo">
        <h5 className={`text-xl my-2 ml-4 md:text-[28px] md:ml-10 font-extralight text-custom-blue text-center sm:text-[22px] ${domine.className}`}>
          Projetos
        </h5>
      </div>
      <ProjectList projects={projects} visibility={visibility} toggleVisibility={toggleVisibility} resetVisibility={resetVisibility} visibilityDescription={visibilityDescription} toggleVisibilityDescription={toggleVisibilityDescription} resetVisibilityDescription={resetVisibilityDescription} />
    </section>
  );
}
