import { useState } from 'react';

/**
 * Custom hook to manage the visibility of projects.
 * @param {Object} initialState - Initial visibility state for each project.
 * @returns {Object} - State and handlers for visibility toggling.
 */
export const useToggleVisibility = (initialState) => {
  const [visibility, setVisibility] = useState(initialState);

  const toggleVisibility = (projectKey) => {
    setVisibility((previousState) => {
      const newState = { ...previousState };

      Object.keys(newState).forEach((key) => {
        if (key === projectKey) {
          newState[key] = !previousState[key]; // Toggle only the clicked project
        } else {
          newState[key] = true; // Others stay true
        }
      });

      return newState;
    });
  };

  return { visibility, toggleVisibility };
};

