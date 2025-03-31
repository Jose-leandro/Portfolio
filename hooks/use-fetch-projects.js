import { useState, useEffect } from "react";

export const useFetchProjects = (projectKeys) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!projectKeys || projectKeys.length === 0) {
      console.warn("No project keys provided.");
      return;
    }

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";
    console.log("Base URL:", baseUrl);

    const fetchProjects = async () => {
      try {
        const responses = await Promise.all(
          projectKeys.map(async (key) => {
            const response = await fetch(`${baseUrl}/${key}`);
            if (!response.ok) {
              throw new Error(`Error fetching ${key}: ${response.statusText}`);
            }
            return response.json();
          })
        );

        console.log("Fetched Responses:", responses);

        const newProjectData = responses.reduce((accumulator, result, index) => {
          if (result && typeof result === "object") {
            accumulator[projectKeys[index]] = result;
          } else {
            console.warn(`Unexpected response for ${projectKeys[index]}`, result);
            accumulator[projectKeys[index]] = undefined;
          }
          return accumulator;
        }, {});

        setData(newProjectData);
      } catch (error_) {
        console.error("Fetch error:", error_);
        setError(error_);
      }
    };

    fetchProjects();
  }, []);

  // eslint-disable-next-line unicorn/no-null
  if (error == null || error == undefined) {
    return { data }
  }

  return { data, error }
};
