import { useEffect } from 'react';
import React from 'react';
import ReactDOM from 'react-dom';

export default function useAxe() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') {
      import('@axe-core/react').then((axe) => {
        axe.default(React, ReactDOM, 1000);
      });
    }
  }, []);
}
;



