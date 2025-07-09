import { useState, useEffect } from "react";

export const useFetchProjects = (projectKeys) => {
  const [data, setData] = useState({});
  const [error, setError] = useState(undefined);

  useEffect(() => {
    if (!projectKeys || projectKeys.length === 0) { return; }

    const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000";

    const fetchProjects = async () => {
      try {
        const responses = await Promise.all(
          projectKeys.map(async (key) => {
            const response = await fetch(`${baseUrl}/${key}`);
            if (!response.ok) { throw new Error(`Error fetching ${key}: ${response.statusText}`) }
            return response.json();
          })
        );

        const newProjectData = responses.reduce((accumulator, result, index) => {
          if (result && typeof result === "object") { accumulator[projectKeys[index]] = result } else { accumulator[projectKeys[index]] = undefined; }
          return accumulator;
        }, {});

        setData(newProjectData);
      } catch (error_) { setError(error_); }
    };

    fetchProjects();
  }, [projectKeys]);

  // eslint-disable-next-line unicorn/no-null
  if (error == undefined || error == undefined) { return { data }}

  return { data, error }
};
