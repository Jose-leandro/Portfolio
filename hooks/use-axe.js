import { useEffect } from 'react';

const useAxe = () => {
  useEffect(() => {
    if (
      process.env.NODE_ENV === 'development' &&
      typeof window !== 'undefined'
    ) {
      Promise.all([
        import('react'),
        import('react-dom'),
        import('@axe-core/react')
      ]).then(([React, ReactDOM, axe]) => {
        axe.default(React, ReactDOM, 1000);
      });
    }
  }, []);
};

export default useAxe;
