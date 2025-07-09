import React from 'react';
import '../app/styles/reset.css';
import '../app/styles/globals.css';
import RootLayout from '../app/layout';
import PropTypes from 'prop-types';
import useAxe from '../hooks/use-axe';

/**
 * MyApp is the custom App component for Next.js.
 * It wraps all page components with the main layout component.
 *
 * @param {Object} props - The component props.
 * @param {React.ElementType} props.Component - The page component to be rendered.
 * @param {Object} props.pageProps - The initial props preloaded for the active page.
 * @returns {React.ReactElement} The React element representing the application.
 */

function MyApp({ Component, pageProps }) {
  useAxe()

  return (
    <RootLayout>
      <Component {...pageProps} />
    </RootLayout>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
