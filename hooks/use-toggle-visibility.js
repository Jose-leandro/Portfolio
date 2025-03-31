import { useState } from 'react';

/**
 * Custom hook to manage the visibility of projects.
 * @param {Object} initialState - Initial visibility state for each project.
 * @returns {Object} - State and handlers for visibility toggling.
 */
export const useToggleVisibility = (initialState) => {
  const [visibility, setVisibility] = useState(initialState);
  const [isClicked, setIsClicked] = useState(false);

  const toggleVisibility = (projectKey) => {
    setIsClicked((previousState) => !previousState);

    setVisibility((previousState) => {
      const newState = { ...previousState };

      the error it's in thsi part
      Object.keys(newState).forEach((key) => {
        newState[key] = key === projectKey ? previousState[projectKey] : isClicked ? true : !previousState[key]
      });

      console.log(newState)
      return newState;
    });
  };

  return { visibility, toggleVisibility };
};
