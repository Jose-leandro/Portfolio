import { useState } from 'react';

export const useToggleVisibility = () => {
  const initialState = { calculadora: true, gedf: true, reanotes: true, spotifyimersaofrontend: true };

  const [visibility, setVisibility] = useState(initialState);
  // Toggle visibility of one project (make only it visible)
  const toggleVisibility = (projectKey) => {

    setVisibility((previousState) => {
      const newState = {};

      // Set all to false except the selected one
      Object.keys(previousState).forEach((key) => { newState[key] = key === projectKey; });
      return newState;
    });
  };

  // ✅ NEW FUNCTION: Set all to true
  const resetVisibility = () => {
    const newState = {};
    Object.keys(initialState).forEach((key) => { newState[key] = true; });
    setVisibility(newState);
  };

  return { visibility, toggleVisibility, resetVisibility };
};


export const useToggleVisibilityDescription = () => {
  const initialStateDescription = {
    calculadora: false,
    gedf: false,
    reanotes: false,
    spotifyimersaofrontend: false,
  };

  const [visibilityDescription, setVisibilityDescription] = useState(initialStateDescription);

  const toggleVisibilityDescription = (projectKey) => {
    setVisibilityDescription(() => {
      return {
        calculadora: false,
        gedf: false,
        reanotes: false,
        spotifyimersaofrontend: false,
        [projectKey]: true, // sets selected key to true
      };
    });
  };

  // 🔴 Reset all to false (used when clicking "X" to close)
  const resetVisibilityDescription = () => { setVisibilityDescription(initialStateDescription) };

  return { visibilityDescription, toggleVisibilityDescription, resetVisibilityDescription };
};

